import React, { useEffect, useState } from "react";
import LinksForms from "./LinksForms";
import { db } from "../firebase";

const Links = () => {
  const [links, setLinks] = useState([]);
  const addOrEdit = async (LinkObject) => {
    // console.log('new task');
    await db.collection("links").doc().set(LinkObject);
    //    console.log('new task added');
  };
  const getLinks = async () => {
    const docs = [];
    db.collection("links").onSnapshot((querySnapshot) => {
      querySnapshot.forEach((link) => {
        docs.push({ ...link.data(), id: link.id });
      });
      setLinks(docs);
    });
  };
  useEffect(() => {
    getLinks();
  }, []);
  const onDelete = (id) => {
    //  console.log(id);
    if (window.confirm("esta seguro que desea eliminar?")) {
      console.log("borrar" + id);
    }
  };
  return (
    <div>
      <div className="col-md-4 p-2">
        <LinksForms addOrEdit={addOrEdit} />
      </div>
      <div className="col-md-8 p-2">
        {links.map((link) => (
          <div className="card mb-1" key={link.id}>
            <div className="card-body">
              <div className="d-flex justify-content-between">
                <h4>{link.name}</h4>
                <i
                  className="material-icons text-danger"
                  onClick={() => onDelete(link.id)}
                >
                  close
                </i>
              </div>

              <p>{link.description}</p>
              <a href={link.url} target="_blank" rel="noopener noreferrer">
                ir a la pagina web
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Links;
