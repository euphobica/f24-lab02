function newRectangle(width: number, height: number): Shape {
    let internalWidth = width;
    let internalHeight = height;
    return {
        computeArea: function (): number {
            return internalWidth * internalHeight
        }
    }
}

export { newRectangle }
