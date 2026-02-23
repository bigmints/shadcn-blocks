"use client";

import { StatusBar } from "@/registry/new-york/_shared/status-bar";
import { Trash2, AlertTriangle, Share, Heart } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export function Modal01() {
    const [showModal, setShowModal] = useState(true);
    const [modalType, setModalType] = useState<"alert" | "action-sheet">("alert");

    return (
        <div className="flex flex-col h-full bg-background relative">
            <StatusBar />

            {/* Placeholder app content */}
            <div className="flex-1 flex items-center justify-center px-6">
                <div className="text-center w-full space-y-3">
                    <p className="text-sm text-muted-foreground">Tap below to preview modal styles</p>
                    <div className="flex gap-2">
                        <Button
                            variant={modalType === "alert" ? "default" : "outline"}
                            size="sm"
                            className="flex-1 text-xs"
                            onClick={() => { setModalType("alert"); setShowModal(true); }}
                        >
                            Alert Dialog
                        </Button>
                        <Button
                            variant={modalType === "action-sheet" ? "default" : "outline"}
                            size="sm"
                            className="flex-1 text-xs"
                            onClick={() => { setModalType("action-sheet"); setShowModal(true); }}
                        >
                            Action Sheet
                        </Button>
                    </div>
                </div>
            </div>

            {/* Modal Overlay */}
            {showModal && (
                <div className="absolute inset-0 z-50 flex items-center justify-center">
                    <div
                        className="absolute inset-0 bg-black/40 backdrop-blur-[2px] animate-in fade-in duration-200"
                        onClick={() => setShowModal(false)}
                    />

                    {modalType === "alert" ? (
                        <div className="relative z-10 w-[270px] bg-background rounded-2xl overflow-hidden shadow-2xl animate-in zoom-in-95 fade-in duration-200">
                            <div className="px-5 pt-5 pb-4 text-center">
                                <div className="w-12 h-12 rounded-full bg-destructive/10 flex items-center justify-center mx-auto mb-3">
                                    <AlertTriangle className="h-6 w-6 text-destructive" />
                                </div>
                                <h3 className="font-semibold text-base">Delete Item?</h3>
                                <p className="text-sm text-muted-foreground mt-1.5 leading-relaxed">
                                    This action cannot be undone.
                                </p>
                            </div>
                            <div className="border-t divide-x flex">
                                <button className="flex-1 py-3 text-sm font-medium text-primary" onClick={() => setShowModal(false)}>Cancel</button>
                                <button className="flex-1 py-3 text-sm font-semibold text-destructive" onClick={() => setShowModal(false)}>Delete</button>
                            </div>
                        </div>
                    ) : (
                        <div className="absolute bottom-4 left-3 right-3 z-10 animate-in slide-in-from-bottom-4 duration-300">
                            <div className="bg-background/95 backdrop-blur-xl rounded-2xl overflow-hidden shadow-2xl">
                                {[
                                    { label: "Share", icon: Share, color: "text-foreground" },
                                    { label: "Save to Favorites", icon: Heart, color: "text-foreground" },
                                    { label: "Delete", icon: Trash2, color: "text-destructive" },
                                ].map((action) => (
                                    <button
                                        key={action.label}
                                        className={`flex items-center gap-3 w-full px-5 py-3.5 text-sm font-medium border-t first:border-t-0 ${action.color}`}
                                        onClick={() => setShowModal(false)}
                                    >
                                        <action.icon className="h-4 w-4" />
                                        {action.label}
                                    </button>
                                ))}
                            </div>
                            <button
                                className="w-full mt-2 py-3.5 text-sm font-semibold text-primary bg-background/95 backdrop-blur-xl rounded-2xl"
                                onClick={() => setShowModal(false)}
                            >
                                Cancel
                            </button>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}
