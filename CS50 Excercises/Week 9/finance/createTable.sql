CREATE TABLE shares (
    shares_id INTEGER PRIMARY KEY AUTOINCREMENT,
    symbol NOT NULL,
    AmountOfShares NOT NULL,
    ValueOfShares NOT NULL,
    price NOT NULL,
    user_id INTEGER,
    CONSTRAINT user_id
        FOREIGN KEY (user_id) 
        REFERENCES users (id)
);

CREATE TABLE history (
	history_id INTEGER PRIMARY KEY AUTOINCREMENT,
	dateOfTransaction DATE NOT NULL,
	amount_Shares NOT NULL,
    symbol NOT NULL,
    price NOT NULL,
    user_id INTEGER,
	FOREIGN KEY (user_id) REFERENCES users (id)
);

ALTER TABLE history
DROP CONSTRAINT shares_id;

DROP TABLE IF EXISTS shares;

SELECT AmountOfShares  FROM shares,users WHERE shares.user_id = user.id AND user_id = ? and symbol = ?