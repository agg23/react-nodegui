import { registerComponent, ComponentConfig } from "../config";
import { Fiber } from "react-reconciler";
import { AppContainer } from "../../reconciler";
import { RNTableWidget, TableWidgetProps } from "./RNTableWidget";

class TableWidgetConfig extends ComponentConfig {
  tagName = RNTableWidget.tagName;
  shouldSetTextContent(nextProps: TableWidgetProps): boolean {
    return true;
  }
  createInstance(
    newProps: TableWidgetProps,
    rootInstance: AppContainer,
    context: any,
    workInProgress: Fiber
  ): RNTableWidget {
    const widget = new RNTableWidget(0, 0);
    widget.setProps(newProps, {});
    return widget;
  }
  finalizeInitialChildren(
    instance: RNTableWidget,
    newProps: TableWidgetProps,
    rootContainerInstance: AppContainer,
    context: any
  ): boolean {
    return true;
  }
  commitMount(
    instance: RNTableWidget,
    newProps: TableWidgetProps,
    internalInstanceHandle: any
  ): void {
    if (newProps.visible !== false) {
      instance.show();
    }
    return;
  }
  commitUpdate(
    instance: RNTableWidget,
    updatePayload: any,
    oldProps: TableWidgetProps,
    newProps: TableWidgetProps,
    finishedWork: Fiber
  ): void {
    instance.setProps(newProps, oldProps);
  }
}

export const TableWidget = registerComponent<TableWidgetProps>(
  new TableWidgetConfig()
);
