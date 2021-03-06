import React from "react";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";

import { Book } from "../models/Book";

type BookCardProps = {
    book: Book;
};

const BookCard: React.FC<BookCardProps> = ({ book }) => {
    return (
        <Card style={{ height: "100%" }}>
            <CardMedia
                component="img"
                image={book.volumeInfo.imageLinks?.thumbnail ?? "assets/image_nav.jpg"}
            />
            <CardContent>
                <Typography gutterBottom variant="h6" color="secondary">{book.volumeInfo.title}</Typography>
                <Typography gutterBottom variant="subtitle1" color="secondary">{book.volumeInfo.subtitle}</Typography>
                <Typography variant="body2">
                    {book.volumeInfo.description}
                </Typography>
            </CardContent>
        </Card>
    );
};

export default BookCard;