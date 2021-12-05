import firebase from 'firebase/app'
import 'firebase/firestore';

const deleteFood = async (id) => {
    const db = firebase.firestore();
    await db.collection('foods').doc(id).delete()
}

const getFoodById = async (id) => {
    const db = firebase.firestore();
    const doc = await db.collection('foods').doc(id).get();
    return {...doc.data(), id: doc.id};
}

const getFoods = async () => {
    const db = firebase.firestore();
    const snapshot = await db.collection('foods').get();
    return snapshot.docs.map(doc => ({...doc.data(), id: doc.id}));
}

const updateFood = async (food) => {
    var db = firebase.firestore();
    await db.collection('foods').doc(food.id).update(food);
}

const addFood = async (food) => {
    var db = firebase.firestore();
    await db.collection('foods').add(food);
}

export {
    deleteFood,
    getFoodById,
    getFoods,
    updateFood,
    addFood,
}
