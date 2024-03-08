const express=require('express');
const api= require('novelcovid');
const app=express();
//config viewEngine
app.set('views','/views');
app.set('view engine','ejs')
app.use(express.static('public'));
//conect and call covid api
  app.get('/*', async (req, res) => {
    const global = await api.all();
    const countries = await api.countries({ sort: 'cases' });
    res.render('index', { global, countries });
  });
  app.listen(3000,()=> console.log('running on port 8080'));