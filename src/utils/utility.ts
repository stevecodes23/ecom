export class Utility {
    public static getPaginatedFormatData(
      data: any,
      totalResultCount,
      page,
      perPage,
    ) {
      return {
        items: data,
        page: page,
        per_page: perPage,
        total: totalResultCount,
        total_pages: Math.ceil(totalResultCount / perPage),
      };
    }}
  