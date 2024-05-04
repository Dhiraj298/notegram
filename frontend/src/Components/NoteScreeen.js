import React, { useEffect, useState } from 'react'
import './noteScreen.css'
import Navbar from './Navbar'

function NoteScreeen() {
    const [title_input, settitle_input] = useState('')
    const [description_input, setdescription_input] = useState('')
    function handlechange2(event) {
        setdescription_input(event.target.value)
    }
    function handlechange1(event) {
        settitle_input(event.target.value)
    }

    const token = localStorage.getItem('authToken')


    const submit_fun = async (e) => {
        e.preventDefault();
        const userData = {
            title: title_input,
            description: description_input,
        };
        let response = await fetch("http://localhost:5341/notes/", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'authorization': token
            },
            body: JSON.stringify(userData)
        })
        const json = await response.json();

        if (!json.success) {
            alert(json.msg)
        }
        else {
            console.log(json.newNote)
            LoadData();
        }

        settitle_input('');
        setdescription_input('');


    }

    const delete_fun = async (noteId)=>{
        let response = await fetch(`http://localhost:5341/notes/${noteId}` , {
            method: 'Delete',
            headers: {
                'Content-Type': 'application/json',
                'authorization': token
            },
        })
        const json = await response.json();

        if(!json.success){
            alert("cant dlete some pb");
        }else{
            console.log(json);
            LoadData();
        }

        // console.log("delete d node os " , noteId)
    }

    const tdata = [
        { property1: 'Value 1', property2: 'Value 2' },
        { property1: 'Value 3', property2: 'Value 4' },
        // Add more objects as needed
    ];


    // let data = [];
    const [data, setData] = useState([]);
    const LoadData = async () => {

        console.log(token)
        let response = await fetch("http://localhost:5341/notes/", {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'authorization': token
            },
            // body:JSON.stringify({ email: credentials.email , password : credentials.password })
        })
        response = await response.json();

        let data1 = Array.from(response.notes);
        setData(data1);
        console.log(data)
    }

    useEffect(() => {
        LoadData()
    }, [])


    return (

        // <div>
        //     {
        //         <div>
        //             {data.map((dataElement, index) => (
        //                 <div key={index}>
        //                     <p>{dataElement.title}</p>
        //                     <p>{dataElement.description}</p>
        //                 </div>
        //             ))}
        //         </div>
        //     }
        //     <button onClick={LoadData}>ubtoon</button>

        // </div>
        <div className='parent-main'>
            <Navbar />

            <div className='parent-Notescreen'>


                <form className='formData'>
                    <div>

                        <input type='text' placeholder='title' value={title_input} onChange={handlechange1}></input>
                    </div>
                    <div>
                        <textarea type='text' className="description-Notescreen" placeholder='description' value={description_input} onChange={handlechange2}></textarea>

                    </div>

                    <button type='submit' onClick={submit_fun}>Add Note</button>
                </form>


                <section className='display-notes'>

                    <div className='Notescreen-headline'>
                        <h3>Your Notes</h3>

                    </div>




                    <div className='Notescreen-card-container-parent'>
                        {data.map((dataElement, index) => (
                            <div key={index} className="Notescreen-card-outerdiv">
                                <div className="Notescreen-card-innerdiv">
                                    <h2 className="note-title">{dataElement.title}</h2>
                                    <div className="note-content">{dataElement.description}</div>
                                    <p className="note-date">{dataElement.createdAt}</p>
                                    <button onClick={()=>delete_fun(dataElement._id)}>Delete</button>
                                </div>
                            </div>
                        ))}
                    </div>



                </section>
            </div>
        </div>
    )
}

export default NoteScreeen