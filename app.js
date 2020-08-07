const yargs = require('yargs')
const chalk =  require('chalk')
const notes= require('./notes.js')


//Customize yargs version
yargs.version('1.1.0')

// Create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title:{
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body:{
            describe:'Body of the note',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        notes.addNote(argv.title,argv.body) 
    }
})


//Create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title:{
            describe:'Title of the note',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
    notes.removeNote(argv.title)
    }
})


//Create read command
yargs.command({
    command: 'read',
    describe: 'Read a note!',
    builder: {
        title: {
            type: 'string',
            describe : 'Title of the note',
            demandOption: true
        }
    }, 
    handler(argv){
        notes.readNotes(argv.title)
    }
})


//Create list command
yargs.command({
    command: 'list',
    describe: 'List a note',
    handler(){
        notes.listNotes()
    }
})


yargs.parse()
