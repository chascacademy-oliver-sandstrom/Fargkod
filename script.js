function Color(r, g, b) {
    this.r = r;
    this.g = g;
    this.b = b;
}

Color.prototype.rgb = function() {
    return `rgb(${this.r}, ${this.g}, ${this.b})`
}

Color.prototype.hex = function() {
    let hexR = this.r.toString(16).padStart(2, '0');
    let hexG = this.g.toString(16).padStart(2, '0');
    let hexB = this.b.toString(16).padStart(2, '0');
    return `#${hexR}${hexG}${hexB}`;
}

Color.prototype.rgba = function(a) {
    return `rgba(${this.r}, ${this.g}, ${this.b}, ${a})`;
}

let myColor = new Color(255, 100, 0);

const button = document.querySelector('.button');

button.addEventListener('click', () => {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    myColor = new Color(r, g, b);
    document.body.style.background = myColor.rgb(); 
    console.log(myColor.rgb());
    console.log(myColor.hex());
    console.log(myColor.rgba(0.5));
});
