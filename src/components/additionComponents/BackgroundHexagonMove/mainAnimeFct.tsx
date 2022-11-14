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
    const electronColor = 'rgb(74,196,46)'
    const electronRadius = 1
    let electrons: Array<IElectron> = []
    // length of hexagon edge
    const edgeLength = 50
    const maxElectrons = 10
    let lastTime = Date.now()
    requestAnimationFrame(anime)

    function anime(){
        const electronsForDelete: Array<number> = []
        if (context === null){
            return
        }
        //condition of creation of new electron
        if (Math.random() > 0.9 && electrons.length < maxElectrons){
            console.log('create new electron', electrons.length)
            const newElectron = createNewElectron(elem)
            electrons.push(newElectron)
        }
        fillBackdrop(elem, context)
        electrons = workWithElectrons(electrons, electronsForDelete, context, electronRadius, edgeLength, lastTime, electronColor)
        lastTime = Date.now()


        requestAnimationFrame(anime)
    }
}



function workWithElectrons(
    electrons: Array<IElectron>,
    electronsForDelete: Array<number>,
    context: CanvasRenderingContext2D,
    electronRadius: number,
    edgeLength: number,
    lastTime: number,
    electronColor: string
){
    electrons.forEach((electron, electronIndex)=>{
        if (electron.lifeStart + electron.lifelong < Date.now()){
            electronsForDelete.push(electronIndex)
        } else {
            if (electron.edgeDist < edgeLength){
                const x = electron.posX + electron.edgeDist * electron.dirX
                const y = electron.posY + electron.edgeDist * electron.dirY
                drawElectron(context, x, y, electronRadius, electronColor)
                electron.edgeDist += (Date.now()-lastTime)/10
            } else {
                const x = electron.posX + edgeLength * electron.dirX
                const y = electron.posY + edgeLength * electron.dirY
                drawElectron(context, x, y, electronRadius, electronColor)
                electron.posX = x
                electron.posY = y
                electron.edgeDist = 0

                electron.angle = changeElectronDirection(electron.angle)
                electron.dirX = Math.sin(electron.angle)
                electron.dirY = Math.cos(electron.angle)

            }
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
    return direction = direction + newAngelDir * Math.PI / 3
}

function fillBackdrop(elem : HTMLCanvasElement, context: CanvasRenderingContext2D){
    context.fillStyle = 'rgba(0,0,0,0.01)'
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