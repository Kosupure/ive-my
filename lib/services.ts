export async function getHome() {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL ?? ""}/home`
    );
    const result = await response.json();

    return result;
  } catch (error) {
    throw error;
  }
}

export async function getEvent() {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL ?? ""}/events`
    );
    const result = await response.json();

    return result;
  } catch (error) {
    throw error;
  }
}

export async function getOrder() {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL ?? ""}/groupOrders`
    );
    const result = await response.json();

    return result;
  } catch (error) {
    throw error;
  }
}

export async function getGroupOrders() {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL ?? ""}/groupOrders`
    );
    const result = await response.json();

    return result;
  } catch (error) {
    throw error;
  }
}


export async function getTracking(orderId: string, groupOrderId: string) {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL ?? ""}/orders/track/${orderId}/${groupOrderId}`
    );
    const result = await response.json();

    return result;
  } catch (error) {
    throw error;
  }
}
