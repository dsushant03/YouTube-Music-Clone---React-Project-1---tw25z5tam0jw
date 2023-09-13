
let albumsDataObject = {}

const punjabi = [
    {
        id : "64cee72fe41f6d0a8b0cd104",
        title : "Tibbeyan Da Putt",
        image : "https://newton-project-resume-backend.s3.amazonaws.com/thumbnail/64cee72fe41f6d0a8b0cd104.jpg",
        artists : "Sidhu Moose Wala"
    },
    {
        id : "64cee72fe41f6d0a8b0cd103",
        title : "Terian Balori Akhian",
        image : "https://newton-project-resume-backend.s3.amazonaws.com/thumbnail/64cee72fe41f6d0a8b0cd103.jpg",
        artists : "Jazzy B, Dr Zeus, HORTIE LITTLELOX"
    },
    {
        id : "64cee72fe41f6d0a8b0cd0dd",
        title : "Baari",
        image : "https://newton-project-resume-backend.s3.amazonaws.com/thumbnail/64cee72fe41f6d0a8b0cd0dd.jpg",
        artists : "Bilal Saeed, Momina Mustehsan"
    },
    {
        id : "64cee72fe41f6d0a8b0cd10a",
        title : "Pasoori",
        image : "https://newton-project-resume-backend.s3.amazonaws.com/thumbnail/64cee72fe41f6d0a8b0cd10a.jpg",
        artists : "Ali Sethi, Shae Gill"
    },
    {
        id : "64cee72fe41f6d0a8b0cd0e8",
        title : "Aam Jahe Munde",
        image : "https://newton-project-resume-backend.s3.amazonaws.com/thumbnail/64cee72fe41f6d0a8b0cd0e8.jpg",
        artists : "Parmish Verma, Pardhaan"
    },
    {
        id : "64cee72fe41f6d0a8b0cd101",
        title : "Summer High",
        image : "https://newton-project-resume-backend.s3.amazonaws.com/thumbnail/64cee72fe41f6d0a8b0cd101.jpg",
        artists : "AP Dhillon"
    }
]


const bollywood = [
    {
        id : "64cee72fe41f6d0a8b0cd102",
        title : "Brahmastra (Original Motion Picture Soundtrack)",
        image : "https://newton-project-resume-backend.s3.amazonaws.com/thumbnail/64cee72fe41f6d0a8b0cd102.jpg",
        artists : "Arijit Singh, Shreya Ghoshal, Jonita Gandhi, Javed Ali"
    },
    {
        id : "64cee72fe41f6d0a8b0cd0de",
        title : "83 (Original Motion Picture Soundtrack)",
        image : "https://newton-project-resume-backend.s3.amazonaws.com/thumbnail/64cee72fe41f6d0a8b0cd0de.jpg",
        artists : "K.K., Benny Dayal, Arijit Singh, Papon"
    },
    {
        id : "64cee72fe41f6d0a8b0cd0fc",
        title : "Khamoshiyan",
        image : "https://newton-project-resume-backend.s3.amazonaws.com/thumbnail/64cee72fe41f6d0a8b0cd0fc.jpg",
        artists : "Sushant - Shankar, Jazim Sharma, Mahima Bhardwaj"
    },
    {
        id : "64cee72fe41f6d0a8b0cd0fe",
        title : "Bollywood With Love - Retro",
        image : "https://newton-project-resume-backend.s3.amazonaws.com/thumbnail/64cee72fe41f6d0a8b0cd0fe.jpg",
        artists : "Lata, Mangeshkar, R. D. Burman, Kishore Kumar"
    },
    {
        id : "64cee72fe41f6d0a8b0cd0e1",
        title : "Rustom",
        image : "https://newton-project-resume-backend.s3.amazonaws.com/thumbnail/64cee72fe41f6d0a8b0cd0e1.jpg",
        artists : "Jubin Nautiyal, Atif Aslam, Arijit Singh"
    },
    {
        id : "64cee72fe41f6d0a8b0cd0cf",
        title : "Bollywood Patriotic Songs",
        image : "https://newton-project-resume-backend.s3.amazonaws.com/thumbnail/64cee72fe41f6d0a8b0cd0cf.jpg",
        artists : "Alka Yagnik, Sonu Nigam, Hariharan"
    },
    {
        id : "64cee72fe41f6d0a8b0cd0d3",
        title : "Gehraiyaan",
        image : "https://newton-project-resume-backend.s3.amazonaws.com/thumbnail/64cee72fe41f6d0a8b0cd0d3.jpg",
        artists : "Mohit Chauhan, Kausar Munir, Shalmali Kholgade"
    }
]

const english = [
    {
        id : "64cee72fe41f6d0a8b0cd0e2",
        title : "Speed Drive (From Barbie The Album)",
        image : "https://newton-project-resume-backend.s3.amazonaws.com/thumbnail/64cee72fe41f6d0a8b0cd0e2.jpg",
        artists : "Charli XCX"
    },
    {
        id : "64cee72fe41f6d0a8b0cd0e0",
        title : "Put A Little Love On Me",
        image : "https://newton-project-resume-backend.s3.amazonaws.com/thumbnail/64cee72fe41f6d0a8b0cd0e0.jpg",
        artists : "Niall Horan"
    },
    {
        id : "64cee72fe41f6d0a8b0cd0d9",
        title : "Car Keys (Ayla)",
        image : "https://newton-project-resume-backend.s3.amazonaws.com/thumbnail/64cee72fe41f6d0a8b0cd0d9.jpg",
        artists : "Alok, Ava Max"
    },
    {
        id : "64cee72fe41f6d0a8b0cd0ed",
        title : "See You Again",
        image : "https://newton-project-resume-backend.s3.amazonaws.com/thumbnail/64cee72fe41f6d0a8b0cd0ed.jpg",
        artists : "Carlie Hanson, Illenium, The Chainsmokers"
    }
]

const retro = [
    {
        id : "64cee72fe41f6d0a8b0cd0fe",
        title : "Bollywood With Love - RetroR. D. Burman, Lata Mangeshkar",
        image : "https://newton-project-resume-backend.s3.amazonaws.com/thumbnail/64cee72fe41f6d0a8b0cd0fe.jpg",
        artists : "R. D. Burman, Lata Mangeshkar"
    },
    {
        id : "64cee72fe41f6d0a8b0cd0aa",
        title : "Phir Bhi Dil Hai Hindustani (Original Motion Picture Soundtrack)",
        image : "https://newton-project-resume-backend.s3.amazonaws.com/thumbnail/64cee72fe41f6d0a8b0cd0aa.jpg",
        artists : "Alka Yagnik, Sonu Nigam, Jatin Padit"
    },
    {
        id : "64cee72fe41f6d0a8b0cd0e5",
        title : "Sholay",
        image : "https://newton-project-resume-backend.s3.amazonaws.com/thumbnail/64cee72fe41f6d0a8b0cd0e5.jpg",
        artists : "Kishore Kumar, Manna Dey, R. D. Burman, Lata Mangeshkar"
    },
    {
        id : "64cee72fe41f6d0a8b0cd0f6",
        title : "Kuch Kuch Hota Hai (Original Motion Picture Soundtrack)",
        image : "https://newton-project-resume-backend.s3.amazonaws.com/thumbnail/64cee72fe41f6d0a8b0cd0f6.jpg",
        artists : "Alka Yagnik, Jatin-Lalit, Kumar Sanu"
    },
    {
        id : "64cee72fe41f6d0a8b0cd0c9",
        title : "An Era In An Evening",
        image : "https://newton-project-resume-backend.s3.amazonaws.com/thumbnail/64cee72fe41f6d0a8b0cd0c9.jpg",
        artists : "S. P. Balasubrahmanyam, A. R. Rahman, Lata Mangeshkar, Usha Mangeshkar"
    },
    {
        id : "64cee72fe41f6d0a8b0cd0ff",
        title : "Yeh Vaada Raha",
        image : "https://newton-project-resume-backend.s3.amazonaws.com/thumbnail/64cee72fe41f6d0a8b0cd0ff.jpg",
        artists : "Asha Bhosale, R. D. Burman, Kishore Kumar"
    }
]

albumsDataObject["bollywood"] = bollywood;
albumsDataObject["retro"] = retro;
albumsDataObject["punjabi"] = punjabi;
albumsDataObject["english"] = english;
albumsDataObject["bollywoodTitles"] = ["ALBUMS FOR YOU TO START WITH", "Bollywood Hits"];
albumsDataObject["retroTitles"] = ["OLD IS GOLD", "Retro Music"];
albumsDataObject["punjabiTitles"] = ["FUNKY PUNJABI", "Punjabi Music"];
albumsDataObject["englishTitles"] = ["CLASSICS", "English Songs"];







export {albumsDataObject};