const createError = require('http-errors');
const express = require('express');
const logger = require('morgan');
const {cors} = require('./middlewares/http-headers.middleware');

const indexRouter = require('./routes/index');


const app = express();
app.use(cors);
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', indexRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.send();
});

// Memory usage
(()=>{
  const HALF_MINUTE_IN_MS = 1000 * 30;
  const prettifyLongDouble = (value) => (value / 1024 / 1024).toFixed(2);
  let maxHeapAlloc = 0;
  setInterval(() => {
    const memoryUsageRaw = process.memoryUsage();
    const memoryUsagePretty = { ...memoryUsageRaw, max: Math.max(maxHeapAlloc, memoryUsageRaw.heapUsed) };
    maxHeapAlloc = memoryUsagePretty.max;
    for (const [key, value] of Object.entries(memoryUsagePretty)) {
      memoryUsagePretty[key] = prettifyLongDouble(value);
    }
    console.log(memoryUsagePretty);
  }, HALF_MINUTE_IN_MS);
})();

module.exports = Object.freeze(app);
