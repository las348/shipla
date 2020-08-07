import axios from "axios";

const BASEURL = "https://www.googleapis.com/books/v1/volumes?q=";
const APIKEY = "AIzaSyBAgtwBDEwAMOvRDzX9eONdRc_7IKUqGEI";

// Export an object with a "search" method that searches the Giphy API for the passed query
export default {
    search: function (query) {
        return axios.get(BASEURL + query + "&key=" + APIKEY + "&maxResults=5");
    },
    // Gets all books
    getBooks: function () {
        return axios.get("/api/books");
    },
    // Gets the book with the given id
    getBook: function (id) {
        return axios.get("/api/books/" + id);
    },
    // Deletes the book with the given id
    deleteBook: function (id) {
        return axios.delete("/api/books/" + id);
    },
    // Saves a book to the database
    saveBook: function (bookData) {
        return axios.post("/api/books", bookData);
    }
};