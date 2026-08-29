export const simulateAI = async (title: string, description: string) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const domains = ['Infrastructure', 'Healthcare', 'Education', 'Water Management', 'Sanitation', 'Agriculture'];
      const categories = ['High', 'Medium', 'Low'];
      
      resolve({
        category: domains[Math.floor(Math.random() * domains.length)],
        priority: categories[Math.floor(Math.random() * categories.length)],
        confidence: Math.floor(Math.random() * 20) + 80,
      });
    }, 1500);
  });
};
