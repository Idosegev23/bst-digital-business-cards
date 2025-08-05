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
        image: "/project5.jpg",
        link: "https://bst.co.il/project/create-calaniot/"
      }
    ]
  },
  {
    titleKey: "בנייה BST",
    projects: [
      {
        id: 5,
        nameKey: "אלוני ים",
        descriptionKey: "פרויקט בנייה מתקדם",
        image: "/build_projects/aloni-yam.webp",
        link: "https://bst.co.il/project/aloney_yam/"
      },
      {
        id: 6,
        nameKey: "SIV PARK",
        descriptionKey: "פרויקט בנייה",
        image: "/build_projects/siv_park.webp",
        link: "https://bst.co.il/project/sivpark/"
      },
      {
        id: 7,
        nameKey: "מגדלי מתם שלב ג'",
        descriptionKey: "פרויקט מגורים מתקדם",
        image: "/build_projects/matam.webp",
        link: "https://bst.co.il/project/%d7%9e%d7%aa%d7%9d-%d7%9e%d7%96%d7%a8%d7%97-%d7%97%d7%99%d7%a4%d7%94/"
      },
      {
        id: 8,
        nameKey: "RBS בית שמש",
        descriptionKey: "פרויקט מגורים חדשני בבית שמש",
        image: "/build_projects/beit-shemesh.jpg",
        link: "https://bst.co.il/project/rbs-beit-shemesh/"
      }
    ]
  },
  {
    titleKey: "BuildUp עבודות גמר",
    projects: [
      {
        id: 9,
        nameKey: "כאן תאגיד השידור",
        descriptionKey: "עבודות גמר לכאן תאגיד השידור",
        image: "/buildup/כאן תאגיד השידור עבודות גמר חברת BUILDUP מקבוצת BST (10).jpg",
        link: "https://bst.co.il/project/%d7%9b%d7%90%d7%9f-%d7%aa%d7%90%d7%92%d7%99%d7%93-%d7%94%d7%a9%d7%99%d7%93%d7%95%d7%a8/"
      },
      {
        id: 10,
        nameKey: "Global E",
        descriptionKey: "עבודות גמר לחברת Global E",
        image: "/buildup/ביצוע עבודות גמר לחברת GLOBAL E על ידי חברת BUILSUP מקבוצת BST (12).jpg",
        link: "https://bst.co.il/project/global-e/"
      },
      {
        id: 11,
        nameKey: "Palo Alto Networks",
        descriptionKey: "משרדי היי-טק מתקדמים",
        image: "/buildup/palo-altoעבודות גמר קבוצת BST FITOUTS (20).jpg",
        link: "https://bst.co.il/project/palo-alto-network/"
      },
      {
        id: 12,
        nameKey: "MalamTeam",
        descriptionKey: "פרויקט משרדים חדשני",
        image: "/buildup/malam-team-עבודות-גמר-למשרדי-מלמ-קבוצת-bst-fitouts-(7)_optimized.jpg",
        link: "https://bst.co.il/project/malam-team-offices/"
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
        image: "/global/2 Champagne BST Canada A (12).jpg",
        link: "https://bstcanada.com/projects/champagne-centre/"
      },
      {
        id: 14,
        nameKey: "Maebrook Roseglen",
        descriptionKey: "פרויקט Maebrook Roseglen",
        image: "/global/Maebrook RoseGlen BST Canada (1).jpg",
        link: "https://bstcanada.com/projects/maebrook-roseglen/"
      },
      {
        id: 15,
        nameKey: "Maebrook Reve",
        descriptionKey: "פרויקט Maebrook Reve",
        image: "/global/REVE_324_cambridge_st_BST Canada (2).jpg",
        link: "https://bstcanada.com/projects/maebrook-reve/"
      },
      {
        id: 16,
        nameKey: "Maebrook Rideau",
        descriptionKey: "פרויקט Maebrook Rideau",
        image: "/global/Maebrook Rideau BST Canada (5).jpg",
        link: "https://bstcanada.com/projects/350-mayfield-ave/"
      }
    ]
  }
];