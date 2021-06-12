const styles = {
  widthItem: stats => 270 / stats.length,
  bgcolorGen: () => {
    return `rgb(${Math.trunc(240 * Math.random())},${Math.trunc(
      240 * Math.random(),
    )},${Math.trunc(240 * Math.random())})`;
  },
};

export default styles;
