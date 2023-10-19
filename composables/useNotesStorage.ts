import { useState } from 'nuxt/app';
import { computed, watch } from 'vue';
import { IState, INote } from '~/types';

const DB_NAME = 'NotesDatabase';
const DB_STORE_NAME = 'NotesStore';
const DB_VERSION = 1;

export const useNotesStorage = () => {
  const notesState = useState<IState>('notes-state', () => ({
    notes: [],
    isEdit: false,
  }));

  const route = useRoute();

  let DB: IDBDatabase | undefined;

  const currentNote = computed(() => notesState.value.notes.find((note: INote) => note.id === route.params.id));

  watch(
    () => ({ ...currentNote.value }) as INote,
    async (newVal, oldVal) => {
      if (!oldVal.id) {
        return;
      }

      await updateNote({ ...newVal, createdAt: new Date() });
    },
    {
      deep: true,
    },
  );

  const getDb = (): Promise<IDBDatabase> => {
    return new Promise((resolve, reject) => {
      if (DB) {
        return resolve(DB);
      }

      const request = window.indexedDB.open(DB_NAME, DB_VERSION);

      request.onerror = (e) => {
        reject(e);
      };

      request.onsuccess = (e: Event) => {
        DB = (e.target as IDBRequest)?.result;

        if (DB) {
          resolve(DB);
        } else {
          reject(new Error('Database is not initialized'));
        }
      };

      request.onupgradeneeded = (e: IDBVersionChangeEvent) => {
        const db = (e.target as IDBRequest)?.result;

        if (db) {
          db.createObjectStore(DB_STORE_NAME, { autoIncrement: true, keyPath: 'id' });
        } else {
          reject(new Error('Database is not initialized'));
        }
      };
    });
  };

  const fetchNotes = async () => {
    const db = await getDb();

    return new Promise((resolve, reject) => {
      const transaction = db.transaction(DB_STORE_NAME, 'readonly');
      const store = transaction.objectStore(DB_STORE_NAME);
      const request = store.getAll();

      request.onsuccess = () => {
        notesState.value.notes = request.result;
        resolve(request.result);
      };

      request.onerror = () => {
        reject(new Error('Failed to get all records'));
      };
    });
  };

  const addNote = async (data: INote) => {
    const db = await getDb();

    return new Promise((resolve, reject) => {
      const transaction = db.transaction(DB_STORE_NAME, 'readwrite');
      const store = transaction.objectStore(DB_STORE_NAME);
      const request = store.add(data);

      request.onsuccess = () => {
        notesState.value.notes.push(data);
        resolve(request.result);
      };

      request.onerror = () => {
        reject(new Error('Failed to add the record'));
      };
    });
  };

  const updateNote = async (data: INote) => {
    const db = await getDb();

    return new Promise((resolve, reject) => {
      const transaction = db.transaction(DB_STORE_NAME, 'readwrite');
      const store = transaction.objectStore(DB_STORE_NAME);
      const request = store.put(data);

      request.onsuccess = () => {
        resolve(request.result);
      };

      request.onerror = () => {
        reject(new Error('Failed to update the record'));
      };
    });
  };

  const deleteNote = async (id: string) => {
    const db = await getDb();

    return new Promise((resolve, reject) => {
      const transaction = db.transaction(DB_STORE_NAME, 'readwrite');
      const store = transaction.objectStore(DB_STORE_NAME);
      const request = store.delete(id);

      request.onsuccess = () => {
        notesState.value.notes = notesState.value.notes.filter((note) => note.id !== id);
        resolve(request.result);
      };

      request.onerror = () => {
        reject(new Error('Failed to delete the record'));
      };
    });
  };

  return {
    notesState,
    currentNote,
    fetchNotes,
    addNote,
    updateNote,
    deleteNote,
  };
};
