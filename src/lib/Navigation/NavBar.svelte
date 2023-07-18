<nav>
    <div>
        <h1 class="title">ElektroWorld</h1>
    </div>

    <div class="popover popover-bottom">
        <button class="btn btn-primary">
            <i class="ri-menu-2-line"></i>
            Categorieën
        </button>
        <div class="popover-container">
            <ul class="menu">
                <li class="menu-item">
                    <a href="#">Thing 1</a>
                </li>
                <li class="menu-item">
                    <a href="#">Thing 2</a>
                </li>
            </ul>
        </div>
    </div>


    <section class="search">
        <div class="input-group">
            <input class="form-input" type="text" placeholder="Waar ben je naar op zoek?">
            <button class="btn btn-primary input-group-btn">
                <i class="ri-search-line"></i>
                Search
            </button>
        </div>
    </section>

    <section>
        <a class="btn btn-primary" href="/account">
            <i class="ri-account-circle-fill"></i>
            Account
        </a>
        <a class="btn btn-primary" href="/shopping-cart">
            <i class="ri-shopping-cart-2-line"></i>
            Winkelwagen
        </a>
    </section>
</nav>


<style lang="scss">
    nav {
        position: fixed;
        top: 0; left: 0;
        width: 100%;
        height: 3rem;
        background-color: var(--primary-color);

        display: flex;
        flex-flow: row nowrap;
        align-items: center;
        justify-content: stretch;

        padding: 1rem;
        gap: 1rem;

        .title {
            color: white;
        }

        .search {
            flex-grow: 1;
        }
    }
</style>