import React from "react";
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import ItemDetail from "../ItemDetail/ItemDetail";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

export const ItemDetailContainer = () => {
  const [data, setData] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const querydb = getFirestore();
    const queryDoc = doc(querydb, 'items', id);
    getDoc(queryDoc)
      .then(res => setData({ id: res.id, ...res.data() }))
  }, [id]);

  return (
    <ItemDetail data={data} />
  );
}

export default ItemDetailContainer