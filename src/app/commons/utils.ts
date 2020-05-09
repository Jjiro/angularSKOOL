export class Utils {

  public getRandomID() {
    const min = Math.ceil(10000);
    const max = Math.ceil(99999);
    return Math.floor(Math.random() * (max - min)) + min;
  }


  public getSchoolName(schoolOption) {
    switch (schoolOption) {
      case 'mathematics':
        return 'Mathematics';
        break;
      case 'english':
        return 'English';
        break;
      case 'history':
        return 'History';
        break;
      case 'physics':
        return 'Physics';
        break;
      case 'chemistry':
        return 'Chemistry';
        break;
      case 'biology':
        return 'Biology';
        break;
    }
  }
}

