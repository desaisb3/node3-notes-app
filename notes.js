const fs = require('fs')
const chalk = require('chalk')


//Adding notes to the file
const addNote= (title,body)=>{
    const notes= loadNotes()
    const duplicateNote = notes.find((note)=> note.title===title)
    
   
    // const duplicateNotes = notes.filter(function(note){
    //     return  note.title===title
    // })

    if (!duplicateNote){
        notes.push({
            title:title,
            body:body
        })

        console.log(chalk.bgGreen('Note added successfully'))
    }
    else{
        console.log(chalk.bgRed('Title already exists!'))
    }

    saveNotes(notes)
    console.log(notes)
}

//Function for removing the note from the file
const removeNote= (title)=>{
    const notes = loadNotes()
    
    const newNotes=notes.filter((note)=>note.title!==title)
    

    if(newNotes.length<notes.length){
        console.log(chalk.bgGreen('Notes removed!'))
        saveNotes(newNotes)
    }
    else{
        console.log(chalk.bgRed(' No Note/Notes removed!'))
    }

    
    console.log(newNotes)

}

//Saving notes to the file
const saveNotes = (notes)=>{
    const dataJSON= JSON.stringify(notes)
    fs.writeFileSync('notes.json',dataJSON)
}


//Loading the notes before adding or removing
const loadNotes= ()=>{
    try{
        const dataBuffer= fs.readFileSync('notes.json')
        const dataJSON=dataBuffer.toString()
        return JSON.parse(dataJSON)
    }
    catch(e){
        return []
    }

}

//Function for listing notes
const listNotes = ()=>{

    const notes = loadNotes()

    console.log(chalk.bgGreen('Your notes..!'))

    notes.forEach((note)=>{
        console.log(note.title)
    })
}


const readNotes = (title) =>{
    const notes = loadNotes()

    const note = notes.find((note)=> note.title===title)

    if(note){
        console.log(chalk.inverse(note.title))
        console.log(note.body)
    }
    else{
        console.log(chalk.bgRed('No note found!'))
    }

}


//Exporting multiple functions to app.js file
module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNotes: readNotes
}