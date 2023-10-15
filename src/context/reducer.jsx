// initial state
export const initialState = {
  steps: ["Your Info", "Select plans", "Add-Ons", "Finish Up"],
  currentStep: 2,
  selectedPlan: null,
  selectedAddOn: [],
  orders: [],
  monthlyBilling: true,
};

// actions
export const actions = {
  NEXT_STEP: "NEXT_STEP",
  PREV_STEP: "PREV_STEP",
  SELECTED_PLAN: "SELECTED_PLAN",
  BILLING_CYCLE: "BILLING_CYCLE",
  SELECTED_ADDON: "SELECTED_ADDON",
  TOGGLE_BILLING: "TOGGLE_BILLING",
};

export const reducer = (state, { type, payload }) => {
  switch (type) {
    // next step
    case actions.NEXT_STEP:
      if (state.currentStep === 4) {
        return {
          ...state,
          currentStep: "completed",
        };
      }

      // selected plan
      if (state.currentStep === 2 && state.selectedPlan) {
        return {
          ...state,
          orders: [payload.planPayload],
          currentStep: state.currentStep + 1,
        };
      }

      // selected add-on
      if (state.currentStep === 3 && state.selectedAddOn) {
        const addOnId = payload.addOnPayload.map((addOn) => addOn.id);
        if (payload.addOnPayload.length < 1 && !payload.planPayload) {
          return {
            ...state,
            orders: [],
            currentStep: state.currentStep + 1,
          };
        }

        if (!payload.planPayload) {
          return {
            ...state,
            orders: payload.addOnPayload,
            currentStep: state.currentStep + 1,
          };
        }

        const currentOrders = [...state.orders, ...payload.addOnPayload];
        const newOrders = Array.from(new Set(currentOrders)).filter((order) =>
          addOnId.includes(order.id)
        );
        const uniqueOrders = Array.from(
          new Set([payload.planPayload, ...newOrders])
        );

        return {
          ...state,
          orders: uniqueOrders,
          currentStep: state.currentStep + 1,
        };
      }

      return {
        ...state,
        currentStep: state.currentStep + 1,
      };

    // previous step
    case actions.PREV_STEP:
      if (state.currentStep === 1) return state;
      return {
        ...state,
        currentStep: state.currentStep - 1,
      };

    // selected plan
    case actions.SELECTED_PLAN:
      return {
        ...state,
        selectedPlan: payload,
      };

    //  selected addon
    case actions.SELECTED_ADDON: {
      if (state.selectedAddOn.includes(payload)) {
        return {
          ...state,
          selectedAddOn: state.selectedAddOn.filter((id) => id !== payload),
        };
      }

      return {
        ...state,
        selectedAddOn: [...state.selectedAddOn, payload],
      };
    }

    // billing cycle
    case actions.BILLING_CYCLE:
      return {
        ...state,

        monthlyBilling: !state.monthlyBilling,
      };

    // toggle billing
    case actions.TOGGLE_BILLING:
      return {
        ...state,
        currentStep: 2,
      };

    default:
      return state;
  }
};
