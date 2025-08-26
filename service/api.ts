const API_BASE_URL = "https://api.lyhsca.org";

export const apiService = {
  async listAnnouncement() {
    try {
      const response = await fetch(`${API_BASE_URL}/v1/lyps/announcement/list`);
      return await response.json();
    } catch (error) {
      console.error("Error fetching announcements:", error);
      throw error;
    }
  },
};
