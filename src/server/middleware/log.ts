import chalk from 'chalk';

const statusToColor = (status: number) => {
  const category = Math.floor(status / 100);
  switch (category) {
    case 2:
      return 'green';
    case 3:
      return 'yellow';
    case 4:
      return 'red';
    case 5:
      return 'magenta';
    default:
      return 'white';
  }
}

const log = defineEventHandler(({res, req}) => {
  const start = new Date().getTime();
  res.on('finish', () => {
    const duration = new Date().getTime() - start;
    const color = statusToColor(res.statusCode);
    console.log(`${chalk[color](req.method)} ${req.originalUrl} ${res.statusCode} ${duration}ms`);
  });
});

export default log;