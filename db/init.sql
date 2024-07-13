CREATE DATABASE IF NOT EXISTS mydatabase;
USE mydatabase;

-- 介護者テーブルの作成
CREATE TABLE IF NOT EXISTS caregivers (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    age INT,
    bio TEXT
);

-- 高齢者テーブルの修正
CREATE TABLE IF NOT EXISTS elderly (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    age INT,
    bio TEXT,
    prefecture VARCHAR(255),  -- 都道府県
    city VARCHAR(255),        -- 市区町村
    address VARCHAR(255)      -- それ以降の詳細な住所情報
);

-- マッチングテーブルの作成
CREATE TABLE IF NOT EXISTS matches (
    id INT AUTO_INCREMENT PRIMARY KEY,
    caregiver_id INT,
    elderly_id INT,
    match_date DATE,
    FOREIGN KEY (caregiver_id) REFERENCES caregivers(id),
    FOREIGN KEY (elderly_id) REFERENCES elderly(id)
);

-- 高齢者が介護を希望する日程のテーブルの作成
CREATE TABLE IF NOT EXISTS care_requests (
    id INT AUTO_INCREMENT PRIMARY KEY,
    elderly_id INT,
    requested_date DATE,
    start_time TIME,
    end_time TIME,
    FOREIGN KEY (elderly_id) REFERENCES elderly(id)
);


-- 介護者のテストデータの挿入（10件）
INSERT INTO caregivers (name, age, bio) VALUES
('佐藤太郎', 45, '経験豊富な介護士で、特に認知症の高齢者のケアに長けています。'),
('鈴木一郎', 38, '元看護師で、医療知識も豊富なため、健康管理が必要な高齢者のサポートが得意です。'),
('田中健', 50, '介護の仕事に20年以上携わり、リハビリテーションの専門知識を持っています。'),
('伊藤聡美', 32, '新しいケア技術を積極的に取り入れ、特に若年層の介護に情熱を注いでいます。'),
('山本早紀', 29, '子供が好きで、小児介護に特化しています。'),
('中村悠子', 47, '心のこもったケアをモットーにしており、多くの家族から信頼されています。'),
('小林直人', 41, '精神障害を持つ人々への介護経験が豊富です。'),
('加藤花', 35, '認知症の初期症状の管理に特化しており、患者とのコミュニケーションを重視しています。'),
('吉田裕也', 39, '急性期の医療介護に従事しており、緊急時の対応も可能です。'),
('森田望', 31, '介護と看護の双方の資格を持ち、特に終末期のケアに力を入れています。');

-- 高齢者のテストデータの挿入（10件）
INSERT INTO elderly (name, age, bio, prefecture, city, address) VALUES
('田中花子', 76, '元気でお話好きな花子さん。糖尿病の管理が必要です。', '東京都', '新宿区', '西新宿1-1-1'),
('山田次郎', 81, '静かで穏やか、本を読むのが好き。最近、転倒しやすくなってきました。', '大阪府', '大阪市中央区', '難波5-2-5'),
('中村幸子', 83, '園芸が趣味の優しいおばあさん。関節炎のため、日常生活支援が必要です。', '北海道', '札幌市中央区', '大通西12-3-2'),
('佐藤健', 79, '歴史好きの穏やかなおじいさん。高血圧を管理中です。', '福岡県', '福岡市東区', '箱崎3-15-7'),
('鈴木理恵', 77, '元教師で、子供の訪問が日々の楽しみです。心臓病のケアが必要。', '愛知県', '名古屋市緑区', '桜山9-8-1'),
('高橋典子', 85, '昔の歌を歌うことが大好きなおばあさん。視力が弱まっています。', '神奈川県', '横浜市青葉区', 'あざみ野南1-4-10'),
('伊藤昭二', 78, '釣りが趣味のおじいさん。聴力が衰えているため、特に注意が必要です。', '京都府', '京都市右京区', '嵯峨野南沢町6-2'),
('森崎和雄', 80, '映画鑑賞が趣味のおじいさん。最近、記憶障害が進んでいます。', '広島県', '広島市中区', '本通12-5-3'),
('原田美枝子', 82, 'お花のアレンジメントを楽しんでいます。関節リウマチの管理が必要です。', '宮城県', '仙台市青葉区', '一番町4-6-1'),
('小川隆', 77, '元バスドライバー。運動不足が気になりますが、散歩が日課です。', '静岡県', '静岡市葵区', '御幸町11-3-4');

-- マッチングのテストデータの挿入（10件）
INSERT INTO matches (caregiver_id, elderly_id, match_date) VALUES
(1, 1, '2024-01-15'), (2, 2, '2024-01-20'), (3, 3, '2024-02-10'),
(4, 4, '2024-02-15'), (5, 5, '2024-03-05'), (6, 6, '2024-03-20'),
(7, 7, '2024-04-10'), (8, 8, '2024-04-15'), (9, 9, '2024-05-10'),
(10, 10, '2024-05-15');

-- 高齢者が介護を希望する日程のテストデータの挿入（10件）
INSERT INTO care_requests (elderly_id, requested_date, start_time, end_time) VALUES
(1, '2024-01-15', '09:00', '12:00'), (2, '2024-01-20', '10:00', '14:00'),
(3, '2024-02-10', '08:00', '11:00'), (4, '2024-02-15', '13:00', '16:00'),
(5, '2024-03-05', '09:00', '12:00'), (6, '2024-03-20', '10:00', '14:00'),
(7, '2024-04-10', '08:00', '11:00'), (8, '2024-04-15', '13:00', '16:00'),
(9, '2024-05-10', '09:00', '12:00'), (10, '2024-05-15', '10:00', '14:00');
