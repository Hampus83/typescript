console.log('Hello world!');

interface DinosaurData {
    dinosaur: string;
    legs: number;
}

const data: DinosaurData[] = [
    {
        dinosaur: 'Triceratops',
        legs: 4
    },
    {
        dinosaur: 'Tyrannosaurus',
        legs: 2
    }
];

printDinos(data);

function printDinos(dinos: DinosaurData[]): void {
    dinos.forEach(dino => {
        console.log(dino.dinosaur);
    });
}




//a. Ett sätt att bestämma vad för typ en variabel ska ha
//b. En mall för hur ett objekt ska struktureras med bestämda typer
//c. String, number, boolean, array
//d. tuple, enum, void, never
//e. ett sätt att bestämma vilken/vilka typer exempelvis en array ska innehålla


// Tips: slå på Word Wrap i View-menyn (Alt+Z)
// Om du kan läsa slutet på nästa rad har du gjort rätt.
// 1. TypeScript förstår "implicit" vad varje variabel i den här filen har för datatyp. Men för att träna ska du lägga in TypeScript-typer för alla variabler.

interface booksData {
    title: string,
    author: string
}

const books: booksData[] = [
	{ title: 'Mio min Mio', author: 'Astrid Lindgren' },
	{ title: 'Pippi Långstrump', author: 'Astrid Lindgren' },
	{ title: 'Sagan om ringen', author: 'J.R.R. Tolkien' },
	{ title: 'De två tornen', author: 'J.R.R. Tolkien' },
	{ title: 'Sagan om konungens återkomst', author: 'J.R.R. Tolkien' },
]

let currentlyReading: booksData = books[0]

console.log(`Just nu läser jag ${currentlyReading.title}.`)

console.log('Alla författare:');
// 2. gör en ny lista, utan dubbletter. Vi vill bara se varje författare en gång.
books.forEach(book => console.log('- ' + book.author))


// 3. Använd array.filter för att välja ut alla böcker av Tolkien. Skriv ut titlarna med forEach.

// 4. Kombinera map och filter i föregående uppgift, för att skapa en array med titlar från Tolkiens böcker. Som skrivs ut med forEach.