const tl = gsap.timeline({defaults:{ease: "power1.out"}}); //the time line for the animation is used here from GSap lib

tl.to('.text',{y:'0%',duration :1.2 ,stagger:0.4}) // the stagger is used to load individual text with some delay

tl.to('.slider',{y:'-100%',duration :1,delay :1.2})

tl.to('.intro',{y:'-100%',duration :1},"-=1")  // the -= is to mention the animation to take place 1 second earlier 

tl.fromTo('nav',{opacity :0},{opacity:1 ,duration:1 })

tl.fromTo('.big-text',{opacity :0},{opacity:1 ,duration:1 }, "-=1")