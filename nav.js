var navbar = ` <div class="navbar">
                <p>Portfolio Tessa van de Langenberg</p>

                <div class="dropdown">
                    <button class="dropbtn">
                        <a href="/learningoutcomes.html">Learning outcomes</a>
                        <i class="fa fa-caret-down"></i>
                    </button>
                </div>

                <div class="dropdown">
                    <button class="dropbtn">
                        <a href="/products/products.html">Products ⮟</a>
                        <i class="fa fa-caret-down"></i>
                    </button>
                    <div class="dropdown-content">
                        <a href="/products/projectplan.html">Project plan</a>
                        <a href="/products/persona.html">Personas and user journeys</a>
                    </div>
                </div>

                <div class="dropdown">
                    <button class="dropbtn">
                        <a href="/readingguide.html">Reading Guide</a>
                        <i class="fa fa-caret-down"></i>
                    </button>
                </div>
                <div class="dropdown">
                    <button class="dropbtn">
                        <a href="/index.html">Home</a>
                        <i class="fa fa-caret-down"></i>
                    </button>
                </div>
            </div>`;
            document.body.insertAdjacentHTML("afterbegin", navbar);