function getrandomNumber (minNumer, maxNumber) {
  minNumer = Math.ceil(minNumer);   // для вычислкения наименьшего целого числа, которое больше, или равно заданному числу
  maxNumber = Math.ceil(maxNumber);   //для вычислкения наибольшего целого числа, которое больше, или равно заданному числу

  if (maxNumber <= minNumer) {
    return ('Пожалуйста выберите число больше' + maxNumber);
  }

  return Math.floor(Math.random() * (maxNumber - minNumer)) + minNumer;
}


function checkStringLength (targetString, maxString) {
  if (targetString.length > maxString) {
    return false;
  }

  return true;
}

/*
СОЗДАТЬ 25 СГЕНЕРИРОВАННЫХ ОБЪЕКТОВ(ПОСТОВ В КЕКСАГРАМ)
  id (от 1 до 25) !НЕ ПОВТОРЯЮТСЯ
  url (photos/{{i}}.jpg), {{i}} = id  !
  description самостоятельное придуманное описание
  likes (от 14 до 200)

  КОММЕНТАРИИ К ПОСТАМ
  coments - рандомное колличество. Генерируются случайно
  id случайное число !НЕ ПОВТОРЯЮТСЯ
  avatar = img/avatar-{{случайное число от 1 до 6}}.svg
 */


const DESCRIPTION = [
  'Классный был день.',
  'Ням, ням, ням',
  'ВАААААУУУУУУУ',
  'А чем вы занимаетесь на выходных?',
  'ШИК, БЛЕСК, КРА СО ТА',
  'НЕ, НУ ТЫ ВИДЕЛ?!',
  'А вообще я пить хочу!',
  'I wonder how, I wonder why...',
  'Such a sunny day, and its my',
  'ВОТ ЭТО ВЕЗЕНИЕ'
];

const MINLIKES = 14;

const MAXLIKES = 200;

const COMMENTID = getrandomNumber (1, 100);

const MESSAGE = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра.',
  'В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const NAME = [
  'Виктор',
  'Мария',
  'Иван',
  'Наталья',
  'Станислав',
  'Маргарита',
  'Виктор',
  'Яна',
  'Денис',
  'Дарья',
  'Макар',
  'Анастасия',
  'Егор',
  'Татьяна'
];

const MINAVATAR = 1;

const MAXAVATAR = 6;

function shuffle(array) {
  let currentIndex = array.length, temporaryValue, randomIndex ;

  while (0 !== currentIndex) {

    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  console.log(array);
  return array;
}

const createPost = (id) => {
  return {
    id: id,
    url: 'photos/' + id + '.jpg',
    description: DESCRIPTION[getrandomNumber(0, DESCRIPTION.length - 1)],
    likes: getrandomNumber(MINLIKES, MAXLIKES),
  }
}

const createComment = (id) => {
  return {
    id: id,
    avatar: 'img/avatar-' + getrandomNumber (MINAVATAR, MAXAVATAR) + '.svg',
    message: MESSAGE[getrandomNumber (0, MESSAGE.length - 1)],
    name: NAME[getrandomNumber (0, NAME.length - 1)],
  }
}

const createPhotos = () => {
  const photos = [];

  for (let i = 0; i < 25; i++) {
    const post = createPost(i + 1);
    const comments = [];

    for (let j = 0; j < 3; j++) {
      const comment = createComment(j + 1);
      comments.push(comment);
    }

    post.comments = comments;
    photos.push(post);
  }

  return photos;
}

console.log(createPhotos());
