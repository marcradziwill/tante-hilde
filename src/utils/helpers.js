const scrollToAnchor = anchor => {
  if (document.getElementById(anchor)) {
    window.scrollTo({
      top: document.getElementById(anchor).offsetTop - 60,
      left: 0,
      behavior: 'smooth',
    })
  }
}
export {scrollToAnchor}
