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
                        <a href="/products/product1.html">Product temp 1</a>
                        <a href="/products/product2.html">Product temp 2</a>
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
                        <a href="/index.html"><b>Home</b></a>
                        <i class="fa fa-caret-down"></i>
                    </button>
                </div>
            </div>`;
            document.body.insertAdjacentHTML("afterbegin", navbar);