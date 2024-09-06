function circle(radius: number): Shape {
    let internalRadius = radius;
    return {
        computeArea: function (): number {
            return Math.PI * radius * radius
        }
    }
}

export { circle }
