function App() { 
    let nome = 'Gabriel'
    let template = `
        <h1>Olá, ${nome}!</h1>
    `
    return template
}

document.body.innerHTML = App()