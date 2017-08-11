abstract class Media {
  title:string;
  author:string;
  genre:string;
  publisher:string;
  // for rating i used my own rating bcuz i couldnt find the real ones online
  rating:string;
  imgSrc:string;

  constructor(title:string,author:string,genre:string,publisher:string,rating:number,imgSrc:string){
    this.title = title;
    this.author = author;
    this.genre = genre;
    this.publisher = publisher;
    this.rating = rating;
    this.imgSrc = imgSrc;
// i undefined each one of them 

  }

  // used render for the basic points 
  render():string{

          let writeOut:string = '<li>' + 'Title ' + this.title + '</li>';
          writeOut += '<li>' + 'Author: ' + this.author + '</li>';
          writeOut += '<li>' + 'Genre: ' + this.genre + '</li>';
          writeOut += '<li>' + 'Publisher: ' + this.publisher + '</li>';
          writeOut += '<li>' + 'Rating: ' + this.rating + '</li>';

    return writeOut;
  }
  getImgSrc():string{
    return this.imgSrc;
  }
  getTitle():string{
    return this.title;
  }
  }


// i didnt know how to put books and cds in one row, so i kept each one in a differnt row

class Book extends Media{
  // used the extra media object for only book (weight)
  weight:number;
  constructor(title:string,author:string,genre:string,publisher:string,rating:number,weight:number,imgSrc:string){
    super(title,author,genre,publisher,rating,imgSrc);
    this.weight = weight;
  }
  render():string{
    let writeOut:string = "<div class=\"row bookStyle\">";
    writeOut += "<div class=\"col-lg-6\">";
    writeOut +="<img class='img-responsive' src=\""+  super.getImgSrc() +"\">";
    writeOut += "</div>";
      writeOut += "<div class=\"col-lg-6 bookStyle\">";
        writeOut += '<h1>' + super.getTitle() + '</h1>';
        writeOut += '<ul>';
        writeOut += super.render();
        // added the empty and filled stars as rating, but was able to only put the rating for all books, all cds, all dvds and all comics, so i wasnt able to devide the books rating
        writeOut += '<li class=\"glyphicon glyphicon-star"\>'+'<li class=\"glyphicon glyphicon-star"\>'+'<li class=\"glyphicon glyphicon-star"\>'+'<li class=\"glyphicon glyphicon-star-empty"\>'+'<li class=\"glyphicon glyphicon-star-empty"\>' + this.rating + '</li>'
        // i used weight as a number and not a string and added (weight in KG)
        writeOut += '<li>' + 'Weight in KG: ' + this.weight + '</li>';
        writeOut += '</ul>';
      writeOut += "</div>";
    writeOut += "</div>";
    return writeOut;
  }




}

class Dvd extends Media{
  // added duration time for both cds and dvds 
  duration:number;
  constructor(title:string,author:string,genre:string,publisher:string,rating:number,duration:number,imgSrc:string){
    super(title,author,genre,publisher,rating,imgSrc);
    this.duration = duration;
  }
  render():string{
    let writeOut:string = "<div class=\"row dvdStyle\">";
    writeOut += "<div class=\"col-lg-6\">";
    writeOut +="<img class='img-responsive' src=\""+  super.getImgSrc() +"\">";
    writeOut += "</div>";
      writeOut += "<div class=\"col-lg-6\">";
        writeOut += '<h1>' + super.getTitle() + '</h1>';
        writeOut += '<ul>';
        writeOut += super.render();
        writeOut += '<li class=\"glyphicon glyphicon-star"\>'+'<li class=\"glyphicon glyphicon-star"\>'+'<li class=\"glyphicon glyphicon-star"\>'+'<li class=\"glyphicon glyphicon-star"\>'+'<li class=\"glyphicon glyphicon-star"\>' + this.rating + '</li>'
        // used the same thing as weight in book, used number instead of string and added duration in mins
        writeOut += '<li>' + 'Duration in min: ' + this.duration + '</li>';
        writeOut += '</ul>';
      writeOut += "</div>";
    writeOut += "</div>";
    return writeOut;
  }



}

class Cd extends Media{
  // added duration
  duration:number;
  constructor(title:string,author:string,genre:string,publisher:string,rating:number,duration:number,imgSrc:string){
    super(title,author,genre,publisher,rating,imgSrc);
    this.duration = duration;
  }
  render():string{
    let writeOut:string = "<div class=\"row cdStyle\">";
    writeOut += "<div class=\"col-lg-6\">";
    writeOut +="<img class='img-responsive' src=\""+  super.getImgSrc() +"\">";
    writeOut += "</div>";
      writeOut += "<div class=\"col-lg-6\">";
        writeOut += '<h1>' + super.getTitle() + '</h1>';
        writeOut += '<ul>';
        writeOut += super.render();
        writeOut += '<li class=\"glyphicon glyphicon-star"\>'+'<li class=\"glyphicon glyphicon-star"\>'+'<li class=\"glyphicon glyphicon-star"\>'+'<li class=\"glyphicon glyphicon-star"\>'+'<li class=\"glyphicon glyphicon-star-empty"\>' + this.rating + '</li>'
        writeOut += '<li>' + 'Duration in min: ' + this.duration + '</li>';
        writeOut += '</ul>';
      writeOut += "</div>";
    writeOut += "</div>";
    return writeOut;
  }

}

class Comic extends Media{
  constructor(title:string,author:string,genre:string,publisher:string,rating:number,imgSrc:string){
    super(title,author,genre,publisher,rating,imgSrc);
  }
  render():string{
    let writeOut:string = "<div class=\"row comicStyle\">";
    writeOut += "<div class=\"col-lg-6\">";
    writeOut +="<img class='img-responsive' src=\""+  super.getImgSrc() +"\">";
    writeOut += "</div>";
      writeOut += "<div class=\"col-lg-6\">";
        writeOut += '<h1>' + super.getTitle() + '</h1>';
        writeOut += '<ul>';
        writeOut += super.render();
        writeOut += '<li class=\"glyphicon glyphicon-star"\>'+'<li class=\"glyphicon glyphicon-star-empty"\>'+'<li class=\"glyphicon glyphicon-star-empty"\>'+'<li class=\"glyphicon glyphicon-star-empty"\>'+'<li class=\"glyphicon glyphicon-star-empty"\>' + this.rating + '</li>'
        writeOut += '</ul>';
      writeOut += "</div>";
    writeOut += "</div>";
    return writeOut;
  }


}

class Seller{
  mediasArray:Array<Media>;
  firstMedia:Media;
  secoundMedia:Media;
  thirdMedia:Media;
  fourthMedia:Media;
  constructor(testArray:Array<Media>){
  this.mediasArray =testArray;
  }
  showArray(){
    console.log(this.mediasArray);
  }
  renderAll(){
    for(let i= 0;i<this.mediasArray.length;i++){
      document.getElementById('mediaList').innerHTML += this.mediasArray[i].render();
    }
  }
  



}
