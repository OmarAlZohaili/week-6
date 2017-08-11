var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Media = (function () {
    function Media(title, author, genre, publisher, rating, imgSrc) {
        this.title = title;
        this.author = author;
        this.genre = genre;
        this.publisher = publisher;
        this.rating = rating;
        this.imgSrc = imgSrc;
        // i undefined each one of them 
    }
    // used render for the basic points 
    Media.prototype.render = function () {
        var writeOut = '<li>' + 'Title ' + this.title + '</li>';
        writeOut += '<li>' + 'Author ' + this.author + '</li>';
        writeOut += '<li>' + 'Genre ' + this.genre + '</li>';
        writeOut += '<li>' + 'Publisher ' + this.publisher + '</li>';
        writeOut += '<li>' + 'Rating ' + this.rating + '</li>';
        return writeOut;
    };
    Media.prototype.getImgSrc = function () {
        return this.imgSrc;
    };
    Media.prototype.getTitle = function () {
        return this.title;
    };
    return Media;
}());
// i didnt know how to put books and cds in one row, so i kept each one in a differnt row
var Book = (function (_super) {
    __extends(Book, _super);
    function Book(title, author, genre, publisher, rating, weight, imgSrc) {
        var _this = _super.call(this, title, author, genre, publisher, rating, imgSrc) || this;
        _this.weight = weight;
        return _this;
    }
    Book.prototype.render = function () {
        var writeOut = "<div class=\"row bookStyle\">";
        writeOut += "<div class=\"col-lg-6\">";
        writeOut += "<img class='img-responsive' src=\"" + _super.prototype.getImgSrc.call(this) + "\">";
        writeOut += "</div>";
        writeOut += "<div class=\"col-lg-6 bookStyle\">";
        writeOut += '<h1>' + _super.prototype.getTitle.call(this) + '</h1>';
        writeOut += '<ul>';
        writeOut += _super.prototype.render.call(this);
        // added the empty and filled stars as rating, but was able to only put the rating for all books, all cds, all dvds and all comics, so i wasnt able to devide the books rating
        writeOut += '<li class=\"glyphicon glyphicon-star"\>' + '<li class=\"glyphicon glyphicon-star"\>' + '<li class=\"glyphicon glyphicon-star"\>' + '<li class=\"glyphicon glyphicon-star-empty"\>' + '<li class=\"glyphicon glyphicon-star-empty"\>' + this.rating + '</li>';
        // i used weight as a number and not a string and added (weight in KG)
        writeOut += '<li>' + 'Weight in KG ' + this.weight + '</li>';
        writeOut += '</ul>';
        writeOut += "</div>";
        writeOut += "</div>";
        return writeOut;
    };
    return Book;
}(Media));
var Dvd = (function (_super) {
    __extends(Dvd, _super);
    function Dvd(title, author, genre, publisher, rating, duration, imgSrc) {
        var _this = _super.call(this, title, author, genre, publisher, rating, imgSrc) || this;
        _this.duration = duration;
        return _this;
    }
    Dvd.prototype.render = function () {
        var writeOut = "<div class=\"row dvdStyle\">";
        writeOut += "<div class=\"col-lg-6\">";
        writeOut += "<img class='img-responsive' src=\"" + _super.prototype.getImgSrc.call(this) + "\">";
        writeOut += "</div>";
        writeOut += "<div class=\"col-lg-6\">";
        writeOut += '<h1>' + _super.prototype.getTitle.call(this) + '</h1>';
        writeOut += '<ul>';
        writeOut += _super.prototype.render.call(this);
        writeOut += '<li class=\"glyphicon glyphicon-star"\>' + '<li class=\"glyphicon glyphicon-star"\>' + '<li class=\"glyphicon glyphicon-star"\>' + '<li class=\"glyphicon glyphicon-star"\>' + '<li class=\"glyphicon glyphicon-star"\>' + this.rating + '</li>';
        // used the same thing as weight in book, used number instead of string and added duration in mins
        writeOut += '<li>' + 'Duration in min ' + this.duration + '</li>';
        writeOut += '</ul>';
        writeOut += "</div>";
        writeOut += "</div>";
        return writeOut;
    };
    return Dvd;
}(Media));
var Cd = (function (_super) {
    __extends(Cd, _super);
    function Cd(title, author, genre, publisher, rating, duration, imgSrc) {
        var _this = _super.call(this, title, author, genre, publisher, rating, imgSrc) || this;
        _this.duration = duration;
        return _this;
    }
    Cd.prototype.render = function () {
        var writeOut = "<div class=\"row cdStyle\">";
        writeOut += "<div class=\"col-lg-6\">";
        writeOut += "<img class='img-responsive' src=\"" + _super.prototype.getImgSrc.call(this) + "\">";
        writeOut += "</div>";
        writeOut += "<div class=\"col-lg-6\">";
        writeOut += '<h1>' + _super.prototype.getTitle.call(this) + '</h1>';
        writeOut += '<ul>';
        writeOut += _super.prototype.render.call(this);
        writeOut += '<li class=\"glyphicon glyphicon-star"\>' + '<li class=\"glyphicon glyphicon-star"\>' + '<li class=\"glyphicon glyphicon-star"\>' + '<li class=\"glyphicon glyphicon-star"\>' + '<li class=\"glyphicon glyphicon-star-empty"\>' + this.rating + '</li>';
        writeOut += '<li>' + 'Duration in min ' + this.duration + '</li>';
        writeOut += '</ul>';
        writeOut += "</div>";
        writeOut += "</div>";
        return writeOut;
    };
    return Cd;
}(Media));
var Comic = (function (_super) {
    __extends(Comic, _super);
    function Comic(title, author, genre, publisher, rating, imgSrc) {
        return _super.call(this, title, author, genre, publisher, rating, imgSrc) || this;
    }
    Comic.prototype.render = function () {
        var writeOut = "<div class=\"row comicStyle\">";
        writeOut += "<div class=\"col-lg-6\">";
        writeOut += "<img class='img-responsive' src=\"" + _super.prototype.getImgSrc.call(this) + "\">";
        writeOut += "</div>";
        writeOut += "<div class=\"col-lg-6\">";
        writeOut += '<h1>' + _super.prototype.getTitle.call(this) + '</h1>';
        writeOut += '<ul>';
        writeOut += _super.prototype.render.call(this);
        writeOut += '<li class=\"glyphicon glyphicon-star"\>' + '<li class=\"glyphicon glyphicon-star-empty"\>' + '<li class=\"glyphicon glyphicon-star-empty"\>' + '<li class=\"glyphicon glyphicon-star-empty"\>' + '<li class=\"glyphicon glyphicon-star-empty"\>' + this.rating + '</li>';
        writeOut += '</ul>';
        writeOut += "</div>";
        writeOut += "</div>";
        return writeOut;
    };
    return Comic;
}(Media));
var Seller = (function () {
    function Seller(testArray) {
        this.mediasArray = testArray;
    }
    Seller.prototype.showArray = function () {
        console.log(this.mediasArray);
    };
    Seller.prototype.renderAll = function () {
        for (var i = 0; i < this.mediasArray.length; i++) {
            document.getElementById('mediaList').innerHTML += this.mediasArray[i].render();
        }
    };
    return Seller;
}());
