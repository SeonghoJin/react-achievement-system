export class AchievementStorage {

    achievements: Record<string, boolean>
    achievementStorageKey = 'achievement-storage'

    constructor() {
        try {
            this.achievements = JSON.parse(localStorage.getItem(this.achievementStorageKey) ?? "{}");
        } catch (e) {
            console.error(e);
        } finally {
            this.achievements = {};
        }
    }
}
