import React, { useState } from 'react';
export const LinkForms = (props) => {


    const initValues = {
        url: '',
        name: '',
        description: ''
    }
    const [values, setValues] = useState(initValues);

    const handlerChanges = e => {
        // console.log(e.target.value);
        const {name,value} = e.target;
        setValues({...values,[name]: value})
        
    }

    const handlerSubmit = e => {
        e.preventDefault();
        // console.log(values);
        props.addOrEdit(values);
        setValues({...initValues})

    }

    return (

        <form className="card card-body" onSubmit={handlerSubmit}>
            <div className="form-group input-group">
                <div className="input-group-text bg-light">
                    <i className="material-icons">insert_link</i>
                </div>
                <input
                    type="text"
                    className="form-control"
                    placeholder="https://ejemplo.com"
                    name="url"
                    onChange={handlerChanges}
                    value={values.url} />
            </div>
            <div className="form-group input-group">
                <div className="input-group-text bg-light">
                    <i className="material-icons">create</i>
                </div>
                <input
                    type="text"
                    className="form-control"
                    placeholder="nombre de la pagina"
                    name="name"
                    onChange={handlerChanges}
                    value={values.name} />
            </div>
            <div className="form-group">
                <textarea
                    name="description"
                    rows="3"
                    className="form-control"
                    placeholder="Escribe una descripcion"
                    onChange={handlerChanges}
                    value={values.description}></textarea>
            </div>
            <button className="btn btn-primary btn-block">
                Guardar
            </button>
        </form>
    )
}
export default LinkForms;
