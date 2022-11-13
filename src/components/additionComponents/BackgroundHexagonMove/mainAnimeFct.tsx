interface IElectron{
    angle: number,
    dirX: number,
    dirY: number,
    posX: number,
    posY: number,
    edgeDist : number,
    speed: number,
    lifelong: number,
    lifeStart: number
}

function mainAnime(elem : HTMLCanvasElement){
    console.log("canvas main anime")
    const context = elem.getContext('2d')
    const electronRadius = 1
    let electrons: Array<IElectron> = []
    // length of hexagon edge
    const edgeLength = 50
    const maxElectrons = 50
    requestAnimationFrame(anime)

    function anime(){
        const electronsForDelete: Array<number> = []
        // console.log("anime")
        if (context === null){
            return
        }
        //condition of creation of new electron
        if (Math.random() > 0.9 && electrons.length < maxElectrons){
            // console.log('create new electron', electrons.length)
            const newElectron = createNewElectron(elem)
            // console.log("newElec", newElectron)
            electrons.push(newElectron)
        }
        // fillBackdrop(elem, context)
        electrons = workWithElectrons(electrons, electronsForDelete, context, electronRadius, edgeLength)
        //rewrite input data for function drawElectron


        requestAnimationFrame(anime)
    }
}



function workWithElectrons(
    electrons: Array<IElectron>,
    electronsForDelete: Array<number>,
    context: CanvasRenderingContext2D,
    electronRadius: number,
    edgeLength: number
){
    electrons.forEach((electron, electronIndex)=>{
        if (electron.lifeStart + electron.lifelong < Date.now()){
            electronsForDelete.push(electronIndex)
        } else {
            let x = electron.posX + electron.dirX * (Date.now() - electron.lifeStart)/10
            // let x = electron.posX + Math.sin(electron.angle) * (Date.now() - electron.lifeStart)/10
            if (x >= Math.sin(edgeLength)){
                // x = electron.posX + Math.sin(edgeLength)
                // electron.posX = x
                // [electron.angle, electron.dirX, electron.dirY] = changeElectronDirection(electron.angle)
            }
            const y = electron.posY + electron.dirY * (Date.now() - electron.lifeStart)/10
            drawElectron(context, x, y, electronRadius, 'rgb(156,46,196)')
        }
    })
    electronsForDelete.forEach((elem)=>{
        electrons.splice(elem,1)
    })
    return electrons
}

function createNewElectron(canvasElem : HTMLCanvasElement){
    // random vector of fly
    const flyAngle = Math.PI * 2 * Math.round(Math.random() * 3)/3
    const newElectron: IElectron = {
        angle: flyAngle,
        dirX: Math.sin(flyAngle),
        dirY: Math.cos(flyAngle),
        posX: canvasElem.width / 2,
        posY: canvasElem.height / 2,
        edgeDist : 0,
        speed: 0.5,
        lifelong: 10*1000*Math.random(),
        lifeStart: Date.now(),
    }
    return newElectron
}

function changeElectronDirection(direction: number){
    const newAngelDir = Math.random() * 2 - 1 >= 0 ? 1 : -1
    console.log(direction, direction + newAngelDir * Math.PI / 3)
    let newDir = direction + newAngelDir * Math.PI / 3
    return [newDir, Math.sin(newDir), Math.cos(newDir)]



}

function fillBackdrop(elem : HTMLCanvasElement, context: CanvasRenderingContext2D){
    context.fillStyle = 'rgba(229,46,46, 0.05)'
    context.beginPath()
    context.fillRect(0,0, elem.width, elem.height)
}

function drawElectron(context: CanvasRenderingContext2D, posX: number, posY: number, radius: number, color: string){
    context.fillStyle = color
    context.beginPath()
    context.ellipse(posX, posY, radius, radius, 0, 0, Math.PI * 2)
    context.fill()
}

export default mainAnime