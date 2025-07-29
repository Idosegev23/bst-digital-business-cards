import { Project } from '@/types';

// הגדרת סוג נתונים חדש לפרויקטים מקובצים
export interface ProjectGroup {
  titleKey: string;
  projects: Project[];
}

export const managementProjects: ProjectGroup[] = [
  {
    titleKey: "ייזום BST",
    projects: [
      {
        id: 1,
        nameKey: "BSTOWERS פתח תקווה",
        descriptionKey: "פרויקט מגורים יוקרתי בפתח תקווה",
        image: "/project1.jpg",
        link: "https://www.bstowers.co.il/?utm_source=dcard&utm_medium=card&utm_campaign=dcard+bstowers"
      },
      {
        id: 2,
        nameKey: "מערבה רחובות",
        descriptionKey: "פרויקט מגורים מתקדם ברחובות",
        image: "/project2.jpg",
        link: "https://www.maarava-bst.co.il/?utm_source=dcard&utm_medium=card&utm_campaign=dcard+maarava"
      },
      {
        id: 3,
        nameKey: "רמברנדט 30 תל אביב",
        descriptionKey: "פרויקט בוטיק יוקרתי בלב תל אביב",
        image: "/project3.jpg",
        link: "https://bst.co.il/project/rembrandt-30/"
      },
      {
        id: 4,
        nameKey: "CREATE קרית אתא",
        descriptionKey: "פרויקט מגורים חדשני בקרית אתא",
        image: "/project4.jpg",
        link: "https://bst.co.il/project/create-calaniot/"
      }
    ]
  },
  {
    titleKey: "בנייה BST",
    projects: [
      {
        id: 5,
        nameKey: "אלוני ים הרצליה",
        descriptionKey: "פרויקט בנייה מתקדם בהרצליה",
        image: "/build_projects/aloni-yam.webp",
        link: "https://bst.co.il/project/aloney_yam/"
      },
      {
        id: 6,
        nameKey: "קמפוס מזרחי טפחות לוד",
        descriptionKey: "פרויקט קמפוס חדשני בלוד",
        image: "/build_projects/mizrachi.webp",
        link: "https://bst.co.il/project/%d7%a7%d7%9e%d7%a4%d7%95%d7%a1-%d7%9e%d7%96%d7%a8%d7%97%d7%99-%d7%98%d7%a4%d7%97%d7%95%d7%aa-%d7%9c%d7%95%d7%93/"
      },
      {
        id: 7,
        nameKey: "מגדל לקסוס",
        descriptionKey: "מגדל יוקרה מתקדם",
        image: "/build_projects/lexus.webp",
        link: "https://bst.co.il/project/%d7%9e%d7%92%d7%93%d7%9c-%d7%9c%d7%a7%d7%a1%d7%95%d7%a1/"
      },
      {
        id: 8,
        nameKey: "מגדלי מתם שלב ג' חיפה",
        descriptionKey: "פרויקט מגורים מתקדם בחיפה",
        image: "/build_projects/matam.webp",
        link: "https://bst.co.il/project/%d7%9e%d7%aa%d7%9d-%d7%9e%d7%96%d7%a8%d7%97-%d7%97%d7%99%d7%a4%d7%94/"
      }
    ]
  },
  {
    titleKey: "BuildUp עבודות גמר",
    projects: [
      {
        id: 9,
        nameKey: "Palo Alto Networks",
        descriptionKey: "משרדי היי-טק מתקדמים",
        image: "/project2.jpg",
        link: "https://bst.co.il/project/palo-alto-network/"
      },
      {
        id: 10,
        nameKey: "MalamTeam",
        descriptionKey: "פרויקט משרדים חדשני",
        image: "/project3.jpg",
        link: "https://bst.co.il/project/malam-team-offices/"
      },
      {
        id: 11,
        nameKey: "Philips",
        descriptionKey: "משרדי חברת פיליפס",
        image: "/project4.jpg",
        link: "https://live-bst-group.pantheonsite.io/project/philips-offices/"
      },
      {
        id: 12,
        nameKey: "MeMed",
        descriptionKey: "משרדי חברת MeMed",
        image: "/project5.jpg",
        link: "https://live-bst-group.pantheonsite.io/project/memed-offices/"
      }
    ]
  },
  {
    titleKey: "BST Global",
    projects: [
      {
        id: 13,
        nameKey: "Champagne Centre",
        descriptionKey: "פרויקט מגורים יוקרתי בקנדה",
        image: "/project6.jpg",
        link: "https://bstcanada.com/projects/champagne-centre/"
      },
      {
        id: 14,
        nameKey: "Maebrook Roseglen",
        descriptionKey: "פרויקט Maebrook Roseglen",
        image: "/project7.jpg",
        link: "https://bstcanada.com/projects/maebrook-roseglen/"
      },
      {
        id: 15,
        nameKey: "Maebrook Reve",
        descriptionKey: "פרויקט Maebrook Reve",
        image: "/project1.jpg",
        link: "https://bstcanada.com/projects/maebrook-reve/"
      },
      {
        id: 16,
        nameKey: "Maebrook Rideau",
        descriptionKey: "פרויקט Maebrook Rideau",
        image: "/project2.jpg",
        link: "https://bstcanada.com/projects/350-mayfield-ave/"
      }
    ]
  }
];