const gs = gsap
gs.from('.image', {height:0, duration: 1})
gs.to('.image', {width:'80%', duration: 1.5})
gs.from('.slider',{width:0,duration:.5,opacity:0})
gs.from('nav h1',{x:20,duration:1,opacity:0})
gs.from('nav img',{x:-20,duration:1,opacity:0})


