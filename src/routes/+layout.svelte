<script>
    import '../styles/global.scss';
    import 'remixicon/fonts/remixicon.css';
    
    import NavBar from '$lib/Navigation/NavBar.svelte';
    import Footer from '$lib/Footer/Footer.svelte';
</script>

<NavBar />

<slot></slot>

<Footer />