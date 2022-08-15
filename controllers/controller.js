const tips = (index, db) => {
  index.get("/tips", (req, res) => {
    res.json({
      tips: db.tips[parseInt(Math.random() * db.tips.length)],
    });
  });

  index.post("/create", (req, res) => {
    const body = req.body;
    db.tips.push(body.tips);
    res.json(body);
  });
};

export default tips;
