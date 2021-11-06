'use strict';

// 1

let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

    while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false    

};

// 3



function remeberMyFilms() {
    if(numberOfFilms >= 2) {
        for(let i = 0; i < 2; i++) {
            const a = prompt('Один из последних просмотренных фильмов', ''),
                  b = prompt('На сколько оцените его?', '');
        
            if(a != null && b != null && a != '' && b != '' && a.length < 50) {
                personalMovieDB.movies[a] = b;
                console.log('done');
            } else {
                console.log('error');
                i--;
            }
        
            
        }
    }
}

remeberMyFilms();



if(personalMovieDB.count < 10) {
    alert('Просмотрено довольно мало фильмов');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30 ) {
    alert('Вы классический зритель');
} else if (personalMovieDB.count >= 30) {
    alert('Вы киноман');
} else {
    alert('произошла ошибка');
}
 
console.log(personalMovieDB);