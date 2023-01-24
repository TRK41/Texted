import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate-db', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate-db database already exists');
        return;
      }
      db.createObjectStore('jate-db', { keyPath: 'id', autoIncrement: true });
      console.log('jate-db database created');
    },
  });

// TODO: Add logic to a method that accepts some content and adds it to the database
export const putDb = async (id,content) => {
console.error('putDb not implemented');
const jateDb = await openDB('jate-db', 1,);
const tx = jateDb.transaction('jate-db', 'readwrite');
const store = tx.objectStore('jate-db');
const request = store.add({ id: id,jate: content });
const result = await request;
console.log('🚀 - data saved to the database', result);
};
// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () => {
console.error('getDb not implemented');
console.log('GET from the database');
const jateDb = await openDB('jate-db', 1);
const tx = jateDb.transaction('jate-db', 'readonly');
const store = tx.objectStore('jate-db');
const request = store.getAll();
const result = await request;
console.log('result.value', result);
return result;
};
initdb();
