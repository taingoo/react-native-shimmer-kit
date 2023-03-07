export default {
  container: (
    width: number,
    height: number,
    borderRadius: number,
    marginVertical: number,
    marginHorizontal: number,
    marginTop: number,
    marginBottom: number,
    marginLeft: number,
    marginRight: number,
    colors: string[]
  ): any => ({
    width,
    height,
    borderRadius,
    marginVertical,
    marginHorizontal,
    marginTop,
    marginBottom,
    marginLeft,
    marginRight,
    backgroundColor: colors ? colors[0] : '#E6E6E6',
    overflow: 'hidden',
  }),
};
