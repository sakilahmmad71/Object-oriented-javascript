const _radius = new WeakMap()
// public interface
class Circle {
    constructor(radius) {
        _radius.set(this, radius)
    }

    draw() {
        console.log('Circle with redius ', _radius.get(this)) 
    }
}

module.exports = Circle