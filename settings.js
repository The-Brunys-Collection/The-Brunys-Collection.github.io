let particlesEnabled = localStorage.getItem('particles') === 'true';

        function updateTime() {
            const now = new Date();
            const hours = now.getHours().toString().padStart(2, '0');
            const minutes = now.getMinutes().toString().padStart(2, '0');
            const seconds = now.getSeconds().toString().padStart(2, '0');
            const timeString = `${hours}:${minutes}:${seconds}`;
            document.getElementById('current-time').textContent = timeString;
        }

        function setTheme(theme) {
            localStorage.setItem('theme', theme);

            let particleColor;
            switch (theme) {
                case 'dark':
                    document.documentElement.style.setProperty('--bg-color', '#141414');
                    document.documentElement.style.setProperty('--text-color', '#ffffff');
                    document.documentElement.style.setProperty('--nav-bg-color', '#1e1e1e');
                    document.documentElement.style.setProperty('--search-bar-bg-color', '#1e1e1e');
                    document.documentElement.style.setProperty('--search-bar-text-color', '#ffffff');
                    document.documentElement.style.setProperty('--hover-color', '#f39c12');
                    particleColor = '#ffffff';
                    break;
                case 'light':
                    document.documentElement.style.setProperty('--bg-color', '#ffffff');
                    document.documentElement.style.setProperty('--text-color', '#000000');
                    document.documentElement.style.setProperty('--nav-bg-color', '#dddddd');
                    document.documentElement.style.setProperty('--search-bar-bg-color', '#dddddd');
                    document.documentElement.style.setProperty('--search-bar-text-color', '#000000');
                    document.documentElement.style.setProperty('--hover-color', '#007bff');
                    particleColor = '#000000';
                    break;
                case 'blue':
                    document.documentElement.style.setProperty('--bg-color', '#e0f7fa');
                    document.documentElement.style.setProperty('--text-color', '#004d40');
                    document.documentElement.style.setProperty('--nav-bg-color', '#00796b');
                    document.documentElement.style.setProperty('--search-bar-bg-color', '#004d40');
                    document.documentElement.style.setProperty('--search-bar-text-color', '#e0f7fa');
                    document.documentElement.style.setProperty('--hover-color', '#004d40');
                    particleColor = '#004d40';
                    break;
                default:
                    break;
            }

            // Apply particles.js only if enabled
            if (particlesEnabled) {
                particlesJS('particles-js', {
                    particles: {
                        number: {
                            value: 80,
                            density: {
                                enable: true,
                                value_area: 800
                            }
                        },
                        color: {
                            value: particleColor
                        },
                        shape: {
                            type: 'circle',
                            stroke: {
                                width: 0,
                                color: '#000000'
                            },
                            polygon: {
                                nb_sides: 5
                            }
                        },
                        opacity: {
                            value: 0.5,
                            random: false,
                            anim: {
                                enable: false,
                                speed: 1,
                                opacity_min: 0.1,
                                sync: false
                            }
                        },
                        size: {
                            value: 3,
                            random: true,
                            anim: {
                                enable: false,
                                speed: 40,
                                size_min: 0.1,
                                sync: false
                            }
                        },
                        line_linked: {
                            enable: true,
                            distance: 150,
                            color: particleColor,
                            opacity: 0.4,
                            width: 1
                        },
                        move: {
                            enable: true,
                            speed: 6,
                            direction: 'none',
                            random: false,
                            straight: false,
                            out_mode: 'out',
                            bounce: false,
                            attract: {
                                enable: false,
                                rotateX: 600,
                                rotateY: 1200
                            }
                        }
                    },
                    interactivity: {
                        detect_on: 'canvas',
                        events: {
                            onhover: {
                                enable: true,
                                mode: 'repulse'
                            },
                            onclick: {
                                enable: true,
                                mode: 'push'
                            },
                            resize: true
                        }
                    },
                    retina_detect: true
                });
            } else {
                document.getElementById('particles-js').innerHTML = ''; 
            }
        }

        function loadTheme() {
            const savedTheme = localStorage.getItem('theme') || 'dark';
            setTheme(savedTheme);
        }

        function toggleParticles() {
            particlesEnabled = !particlesEnabled;
            localStorage.setItem('particles', particlesEnabled);
            if (particlesEnabled) {
                particlesJS('particles-js', {
                    particles: {
                        number: {
                            value: 80,
                            density: {
                                enable: true,
                                value_area: 800
                            }
                        },
                        color: {
                            value: '#ffffff'
                        },
                        shape: {
                            type: 'circle',
                            stroke: {
                                width: 0,
                                color: '#000000'
                            },
                            polygon: {
                                nb_sides: 5
                            }
                        },
                        opacity: {
                            value: 0.5,
                            random: false,
                            anim: {
                                enable: false,
                                speed: 1,
                                opacity_min: 0.1,
                                sync: false
                            }
                        },
                        size: {
                            value: 3,
                            random: true,
                            anim: {
                                enable: false,
                                speed: 40,
                                size_min: 0.1,
                                sync: false
                            }
                        },
                        line_linked: {
                            enable: true,
                            distance: 150,
                            color: '#ffffff',
                            opacity: 0.4,
                            width: 1
                        },
                        move: {
                            enable: true,
                            speed: 6,
                            direction: 'none',
                            random: false,
                            straight: false,
                            out_mode: 'out',
                            bounce: false,
                            attract: {
                                enable: false,
                                rotateX: 600,
                                rotateY: 1200
                            }
                        }
                    },
                    interactivity: {
                        detect_on: 'canvas',
                        events: {
                            onhover: {
                                enable: true,
                                mode: 'repulse'
                            },
                            onclick: {
                                enable: true,
                                mode: 'push'
                            },
                            resize: true
                        }
                    },
                    retina_detect: true
                });
            } else {
                document.getElementById('particles-js').innerHTML = ''; 
            }
        }


        loadTheme();


        updateTime();


        setInterval(updateTime, 1000);
