import posts from '../resources'

export default function handler(req, res) {
    if (req.method === 'GET')
        res.status(200).json(posts);
    else if (req.method === 'POST') {
        if (!req.body.content || !req.body.title)
            res.send(400);
        const toto = {
            "id": "the post id",
            "title": req.body.title,
            "content": req.body.content,
            "created_at": Date()
        }
        posts.push(toto);
        res.status(200).json(posts);
    }
}