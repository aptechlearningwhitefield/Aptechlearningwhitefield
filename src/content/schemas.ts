import { z } from 'zod';
export const schemas = {
  home: z.object({
    "hero": z.object({
      "headline": z.string(),
      "subheading": z.string(),
      "brandLine1": z.string(),
      "brandLine2": z.string(),
      "description": z.string(),
      "pills": z.array(z.string())
    }),
    "trustBar": z.object({
      "stats": z.array(z.object({
        "id": z.string(),
        "value": z.string(),
        "label": z.string()
      }))
    }),
    "about": z.object({
      "badge": z.string(),
      "title": z.string(),
      "subtitle": z.string(),
      "description": z.string(),
      "description2": z.string(),
      "highlights": z.array(z.object({
        "id": z.string(),
        "text": z.string()
      }))
    }),
    "courses": z.object({
      "sectionTitle": z.string(),
      "sectionSubtitle": z.string(),
      "items": z.array(z.object({
        "id": z.string(),
        "name": z.string(),
        "duration": z.string(),
        "level": z.string(),
        "skills": z.array(z.string()),
        "color": z.string(),
        "popular": z.boolean()
      }))
    }),
    "whyUs": z.object({
      "sectionTitle": z.string(),
      "sectionSubtitle": z.string(),
      "features": z.array(z.object({
        "id": z.string(),
        "number": z.string(),
        "title": z.string(),
        "description": z.string()
      }))
    }),
    "journey": z.object({
      "sectionTitle": z.string(),
      "sectionSubtitle": z.string(),
      "steps": z.array(z.object({
        "id": z.string(),
        "step": z.string(),
        "title": z.string(),
        "description": z.string()
      }))
    }),
    "placement": z.object({
      "sectionTitle": z.string(),
      "sectionSubtitle": z.string(),
      "stats": z.array(z.object({
        "id": z.string(),
        "value": z.string(),
        "label": z.string()
      })),
      "features": z.array(z.object({
        "id": z.string(),
        "text": z.string()
      })),
      "partners": z.array(z.object({
        "id": z.string(),
        "name": z.string()
      }))
    }),
    "corporate": z.object({
      "sectionTitle": z.string(),
      "sectionSubtitle": z.string(),
      "description": z.string(),
      "programs": z.array(z.object({
        "id": z.string(),
        "name": z.string()
      })),
      "benefits": z.array(z.object({
        "id": z.string(),
        "text": z.string()
      }))
    }),
    "schoolsColleges": z.object({
      "sectionTitle": z.string(),
      "sectionSubtitle": z.string(),
      "schools": z.object({
        "title": z.string(),
        "subtitle": z.string(),
        "programs": z.array(z.object({
          "id": z.string(),
          "name": z.string()
        })),
        "description": z.string()
      }),
      "colleges": z.object({
        "title": z.string(),
        "subtitle": z.string(),
        "programs": z.array(z.object({
          "id": z.string(),
          "name": z.string()
        })),
        "description": z.string()
      })
    }),
    "testimonials": z.object({
      "sectionTitle": z.string(),
      "sectionSubtitle": z.string(),
      "items": z.array(z.object({
        "id": z.string(),
        "name": z.string(),
        "course": z.string(),
        "company": z.string(),
        "rating": z.number(),
        "quote": z.string()
      }))
    }),
    "faqs": z.object({
      "sectionTitle": z.string(),
      "sectionSubtitle": z.string(),
      "items": z.array(z.object({
        "id": z.string(),
        "question": z.string(),
        "answer": z.string()
      }))
    }),
    "blogs": z.object({
      "sectionTitle": z.string(),
      "sectionSubtitle": z.string(),
      "items": z.array(z.object({
        "id": z.string(),
        "category": z.string(),
        "title": z.string(),
        "excerpt": z.string(),
        "date": z.string(),
        "readTime": z.string(),
        "slug": z.string()
      }))
    }),
    "contact": z.object({
      "sectionTitle": z.string(),
      "sectionSubtitle": z.string(),
      "address": z.string(),
      "phone": z.string(),
      "studentEmail": z.string(),
      "corporateEmail": z.string(),
      "hours": z.string()
    })
  }),
  courses: z.object({
    "hero": z.object({
      "badge": z.string(),
      "title": z.string(),
      "subtitle": z.string()
    }),
    "filters": z.array(z.string()),
    "items": z.array(z.object({
      "id": z.string(),
      "name": z.string(),
      "tagline": z.string(),
      "category": z.string(),
      "duration": z.string(),
      "level": z.string(),
      "mode": z.string(),
      "certification": z.string(),
      "popular": z.boolean(),
      "color": z.string(),
      "overview": z.string(),
      "eligibility": z.string(),
      "skills": z.array(z.string()),
      "projects": z.array(z.string()),
      "careers": z.array(z.string()),
      "modules": z.array(z.object({
        "id": z.string(),
        "title": z.string(),
        "topics": z.array(z.string())
      }))
    }))
  }),
  contact: z.object({
    "hero": z.object({
      "badge": z.string(),
      "title": z.string(),
      "subtitle": z.string()
    }),
    "info": z.object({
      "address": z.string(),
      "phone": z.string(),
      "email": z.string(),
      "adminEmail": z.string(),
      "hours": z.string(),
      "sunday": z.string(),
      "mapEmbed": z.string()
    }),
    "enquiryTypes": z.array(z.object({
      "id": z.string(),
      "label": z.string(),
      "description": z.string()
    })),
    "faqs": z.array(z.object({
      "id": z.string(),
      "q": z.string(),
      "a": z.string()
    }))
  }),
  corporate: z.object({
    "hero": z.object({
      "badge": z.string(),
      "title": z.string(),
      "subtitle": z.string(),
      "cta1": z.string(),
      "cta2": z.string()
    }),
    "stats": z.array(z.object({
      "id": z.string(),
      "value": z.string(),
      "label": z.string()
    })),
    "why": z.array(z.object({
      "id": z.string(),
      "title": z.string(),
      "desc": z.string()
    })),
    "programs": z.array(z.object({
      "id": z.string(),
      "category": z.string(),
      "title": z.string(),
      "desc": z.string(),
      "duration": z.string(),
      "level": z.string()
    })),
    "process": z.array(z.object({
      "id": z.string(),
      "step": z.string(),
      "title": z.string(),
      "desc": z.string()
    })),
    "testimonials": z.array(z.object({
      "id": z.string(),
      "name": z.string(),
      "role": z.string(),
      "company": z.string(),
      "quote": z.string()
    })),
    "faqs": z.array(z.object({
      "id": z.string(),
      "q": z.string(),
      "a": z.string()
    }))
  }),
  corporate_training: z.object({
    "categories": z.array(z.string())
  }),
  schools: z.object({
    "hero": z.object({
      "badge": z.string(),
      "title": z.string(),
      "subtitle": z.string(),
      "cta1": z.string(),
      "cta2": z.string()
    }),
    "schoolPrograms": z.array(z.object({
      "id": z.string(),
      "title": z.string(),
      "desc": z.string(),
      "duration": z.string(),
      "age": z.string(),
      "icon": z.string()
    })),
    "collegePrograms": z.array(z.object({
      "id": z.string(),
      "title": z.string(),
      "desc": z.string(),
      "duration": z.string(),
      "target": z.string()
    })),
    "benefits": z.array(z.object({
      "id": z.string(),
      "title": z.string(),
      "desc": z.string()
    })),
    "stats": z.array(z.object({
      "id": z.string(),
      "value": z.string(),
      "label": z.string()
    })),
    "faqs": z.array(z.object({
      "id": z.string(),
      "q": z.string(),
      "a": z.string()
    }))
  }),
  placements: z.object({
    "hero": z.object({
      "badge": z.string(),
      "title": z.string(),
      "subtitle": z.string(),
      "cta1": z.string(),
      "cta2": z.string()
    }),
    "stats": z.array(z.object({
      "id": z.string(),
      "value": z.string(),
      "label": z.string()
    })),
    "process": z.array(z.object({
      "id": z.string(),
      "step": z.string(),
      "title": z.string(),
      "desc": z.string()
    })),
    "hiringPartners": z.array(z.object({
      "id": z.string(),
      "name": z.string(),
      "type": z.string()
    })),
    "successStories": z.array(z.object({
      "id": z.string(),
      "name": z.string(),
      "course": z.string(),
      "company": z.string(),
      "package": z.string(),
      "quote": z.string()
    })),
    "placementSupport": z.array(z.object({
      "id": z.string(),
      "title": z.string(),
      "desc": z.string()
    }))
  }),
  blog_posts: z.array(z.object({
    "id": z.string(),
    "slug": z.string(),
    "title": z.string(),
    "excerpt": z.string(),
    "category": z.string(),
    "author": z.string(),
    "date": z.string(),
    "readTime": z.string(),
    "featured": z.boolean(),
    "tags": z.array(z.string())
  })),
  about: z.object({
    "hero": z.object({
      "badge": z.string(),
      "title": z.string(),
      "subtitle": z.string()
    }),
    "story": z.object({
      "badge": z.string(),
      "title": z.string(),
      "body1": z.string(),
      "body2": z.string(),
      "body3": z.string(),
      "highlights": z.array(z.object({
        "id": z.string(),
        "text": z.string()
      }))
    }),
    "mission": z.object({
      "title": z.string(),
      "mission": z.object({
        "label": z.string(),
        "text": z.string()
      }),
      "vision": z.object({
        "label": z.string(),
        "text": z.string()
      }),
      "values": z.array(z.object({
        "id": z.string(),
        "title": z.string(),
        "desc": z.string()
      }))
    }),
    "aptech": z.object({
      "badge": z.string(),
      "title": z.string(),
      "body": z.string(),
      "stats": z.array(z.object({
        "id": z.string(),
        "value": z.string(),
        "label": z.string()
      })),
      "points": z.array(z.object({
        "id": z.string(),
        "text": z.string()
      }))
    }),
    "centre": z.object({
      "badge": z.string(),
      "title": z.string(),
      "body": z.string(),
      "features": z.array(z.object({
        "id": z.string(),
        "title": z.string(),
        "desc": z.string()
      }))
    }),
    "team": z.array(z.object({
      "id": z.string(),
      "name": z.string(),
      "role": z.string(),
      "bio": z.string()
    })),
    "achievements": z.array(z.object({
      "id": z.string(),
      "value": z.string(),
      "label": z.string(),
      "sub": z.string()
    })),
    "cta": z.object({
      "title": z.string(),
      "subtitle": z.string(),
      "cta1": z.string(),
      "cta2": z.string()
    })
  })
};
export type Schemas = typeof schemas;